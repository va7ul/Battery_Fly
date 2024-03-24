import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 261px;
  gap: 16px;
  padding-bottom: 38px;
  margin-left: 48px;
  margin-right: 48px;

  @media (min-width: 1280px) {
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 12px;

  @media (min-width: 1280px) {
  }
`;

export const Btn = styled.button`
  max-width: 128px;
  padding: 12px 44px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    &::after {
    }
  }
`;

export const ForgotPasswordBtn = styled.button`
  font-size: 13px;
  font-weight: 500;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {
  }
`;