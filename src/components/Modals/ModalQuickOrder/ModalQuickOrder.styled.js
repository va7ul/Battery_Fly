import styled, { createGlobalStyle } from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Wrapper = styled.div`
  max-width: 357px;
  padding: 15px 30px;

  @media (min-width: 1280px) {
    max-width: 632px;
    padding: 30px 60px;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const CodeOfGoodText = styled.p`
  font-size: 10px;
  color: rgba(87, 80, 80, 1);
  margin-bottom: 6px;

  @media (min-width: 1280px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhoneFieldGlobalStyles = createGlobalStyle`
  .react-international-phone-input {
    width: 250px;

    @media (min-width: 1280px) {
    width: 450px;
  }
  }
   .react-international-phone-input-container .react-international-phone-country-selector-button{
    width:37px;
    background-color: rgba(31, 31, 31, 0.3);

    @media (min-width: 1280px) {
    width: 46px;
  }
} 
`;

export const DivErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 8px;
  padding-left: 8px;
  margin-top: 4px;
  align-self: start;

  @media (min-width: 1280px) {
    font-size: 12px;
    padding-left: 10px;
    margin-top: 8px;
  }
`;

export const Btn = styled.button`
  max-width: 190px;
  margin-top: 16px;
  padding: 12px 10px;
  border-radius: 6px;
  border: none;
  font-size: 15px;

  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 6px;
  }

  @media (min-width: 1280px) {
    max-width: 310px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 24px;

    &::after {
      border-radius: 12px;
    }
  }
`;
