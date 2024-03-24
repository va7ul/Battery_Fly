import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1280px) {
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 36px;
  margin-left: 110px;
  margin-right: 110px;

  @media (min-width: 1280px) {
  }
`;

export const NavBtn = styled.button`
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
  }

  @media (min-width: 1280px) {
  }
`;
