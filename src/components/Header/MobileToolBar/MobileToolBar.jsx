import { Wrapper, Button } from './MobileToolBar.styled';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { useState } from 'react';
import { ModalFeedback } from 'components/Shared/ModalFeedback/ModalFeedback';
import { CartModal } from 'components/Shared/CartModal/CartModal';

export const MobileToolBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function handleOpenCartModal() {
    setIsCartModalOpen(true);
  }
  function handleCloseCartModal() {
    setIsCartModalOpen(false);
  }

  return (
    <Wrapper>
      <FeedBackButton handleOpenModal={handleOpenModal} />
      <ModalFeedback
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <Button type="button" onClick={handleOpenCartModal}>
        <CartIcon />
      </Button>
      <CartModal
        isModalOpen={isCartModalOpen}
        handleCloseModal={handleCloseCartModal}
      />
      <Button type="button">
        <FavoriteIcon />
      </Button>
      <Button type="button">
        <LoginIcon
          sx={{
            color: 'background.paper',
            width: '20px',
            ' &:hover': {
              color: 'secondary.main',
            },
          }}
        />
      </Button>
      {/* <Button type="button">
        <AccountCircleOutlinedIcon
          sx={{
            color: 'background.paper',
            width: '20px',
              ' &:hover': {
              color: 'secondary.main',
            }
          }}
        />
      </Button> */}
    </Wrapper>
  );
};
