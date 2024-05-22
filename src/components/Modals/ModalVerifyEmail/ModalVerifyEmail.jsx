import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { emailSchema } from '../../../common/schemas/emailSchema';
import { verifyEmail } from '../../../redux/user/userOperations';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { Field } from '../SharedComponent/TextField/TextField';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Btn, StyledForm, Text, Wrapper } from './ModalVerifyEmail.styled';

export const ModalVerifyEmail = ({
  isModalVerifyEmailOpen,
  handleCloseVerifyEmailModal,
  handleCloseSignUpSignInModal,
}) => {
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleCloseAllModal = () => {
    handleCloseAgreeModal();
    handleCloseSignUpSignInModal();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailSchema,
    onSubmit: (values, _) => {
      dispatch(verifyEmail(values)).then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          handleOpenAgreeModal();
        }
      });
    },
  });
  return (
    <>
      <ModalYellowGradient
        isModalOpen={isModalVerifyEmailOpen}
        handleCloseModal={handleCloseVerifyEmailModal}
      >
        <CloseButton handleCloseModal={handleCloseVerifyEmailModal} />
        <Wrapper>
          <Text>Ваша е-пошта не верифікована.</Text>
          <Text>Введіть е-пошту для повторної верифікації.</Text>
          <StyledForm onSubmit={formik.handleSubmit}>
            <Field
              id="email"
              name="email"
              label="E-пошта"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Btn type="submit">
              <div>Відправити</div>
            </Btn>
          </StyledForm>
        </Wrapper>
      </ModalYellowGradient>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAllModal}
      >
        <TextAgree>
          Щоб верифікуватись - перейдіть за посиланням, яке ми надіслали на
          вказану e-пошту.
        </TextAgree>
      </ModalAgree>
    </>
  );
};
