import { useState } from 'react';
import { Formik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useMediaQuery } from 'react-responsive';
import { nameSchema } from 'common/schemas/nameSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { add3DPrintOrder } from 'api';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { theme } from '../../../styles/GlobalStyled';
import {
  Btn,
  DivErrorMessage,
  PhoneFieldGlobalStyles,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextField,
  Title,
  Wrapper,
} from './Modal3DPrint.styled';

export const Modal3DPrint = ({
  isModal3DPrintOpen,
  handleClose3DPrintModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [tel, setTel] = useState('');
  const isValidPhone = isPhoneValid(tel);

  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <ModalYellowGradient
        isModalOpen={isModal3DPrintOpen}
        handleCloseModal={handleClose3DPrintModal}
      >
        <CloseButton handleCloseModal={handleClose3DPrintModal} />
        <Wrapper>
          <Title>3D Друк</Title>
          <Formik
            initialValues={{
              name: '',
              comment:'',
            }}
            validationSchema={nameSchema}
            onSubmit={async (values, _) => {
              const orderData = {
                userName: values.name,
                tel: tel,
                comment: values.comment,
              };
              const response = await add3DPrintOrder(orderData);
              if (response) {
                handleOpenAgreeModal();
              }
              handleClose3DPrintModal();
            }}
          >
            <StyledForm>
              <StyledField
                name="name"
                type="text"
                placeholder="Ваше ім’я"
                aria-label="Ім'я"
              />
              <StyledErrorMessage name="name" component="div" />
              <PhoneInput
                style={{
                  '--react-international-phone-height': !isBigScreen
                    ? '28px'
                    : '51px',
                  '--react-international-phone-background-color': 'transparent',
                  '--react-international-phone-border-color': `${theme.colors.textPrimary}`,
                  '--react-international-phone-text-color': `${theme.colors.textPrimary}`,
                  '--react-international-phone-font-size': !isBigScreen
                    ? '14px'
                    : '24px',
                  '--react-international-phone-border-radius': !isBigScreen
                    ? '6px'
                    : '8px',
                  '--react-international-phone-flag-width': !isBigScreen
                    ? '16px'
                    : '24px',
                  '--react-international-phone-flag-height': !isBigScreen
                    ? '16px'
                    : '24px',
                }}
                defaultCountry="ua"
                hideDropdown={true}
                value={tel}
                onChange={phone => setTel(phone)}
                aria-label="Телефон"
              />
              {!isValidPhone && (
                <DivErrorMessage>
                  Введіть свій номер телефону, будь ласка
                </DivErrorMessage>
              )}
              <StyledTextField
                component="textarea"
                name="comment"
                type="text"
                placeholder="Ваш коментар (за необхідності)"
              />
              <StyledErrorMessage name="comment" component="div" />
              <Btn type="submit" disabled={!isValidPhone || tel === '+380'}>
                <div>Оформити замовлення</div>
              </Btn>
            </StyledForm>
          </Formik>
        </Wrapper>
        <PhoneFieldGlobalStyles />
      </ModalYellowGradient>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Дякуємо за замовлення.</TextAgree>
        <TextAgree>Очікуйте на дзвінок від менеджера.</TextAgree>
      </ModalAgree>
    </>
  );
};
