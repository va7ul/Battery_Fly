import {useState } from 'react';
import ReactModal from 'react-modal';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';


const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  content: {
    border: '0px solid transparent',
    borderRadius: '26px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background:
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0.5) 112.295%)',
  },
};

ReactModal.setAppElement('#modal-root');

export const ModalSignUpSignIn = ({
  isModalSignUpSignInOpen,
  handleCloseSignUpSignInModal,
}) => {
  const [showSignUpForm, setshowSignUpForm] = useState(false);

  const handleShowSignInForm = () => setshowSignUpForm(false);
  const handleShowSignUpForm = () => setshowSignUpForm(true);

  return (
    <>
      <ReactModal
        isOpen={isModalSignUpSignInOpen}
        onRequestClose={handleCloseSignUpSignInModal}
        style={customStyles}
      >
        <CloseButton handleCloseModal={handleCloseSignUpSignInModal} />
        <Box>
          <BtnWrapper>
            <NavBtn
              type="button"
              $show={!showSignUpForm}
              onClick={handleShowSignInForm}
            >
              Вхід
            </NavBtn>
            <NavBtn
              type="button"
              $show={showSignUpForm}
              onClick={handleShowSignUpForm}
            >
              Реєстрація
            </NavBtn>
          </BtnWrapper>
          {showSignUpForm && (
            <SignUpForm
              handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
            />
          )}
          {!showSignUpForm && (
            <SignInForm
              handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
            />
          )}
        </Box>
      </ReactModal>
    </>
  );
};