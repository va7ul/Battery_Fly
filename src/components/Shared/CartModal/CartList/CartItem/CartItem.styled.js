import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 5px;

  border-radius: 8px;
  background: ${props => props.theme.colors.gradient};
  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 1280px) {
    padding: 15px 10px;
    gap: 10px;
  }
`;

export const GoodWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Image = styled.img`
  width: 42px;
  height: 42px;

  @media screen and (min-width: 1280px) {
    width: 48px;
    height: 48px;
  }
`;

export const GoodName = styled(Link)`
  width: 68px;
  height: 48px;
  overflow: hidden;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    width: 102px;
    height: 56px;
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  background: ${props => props.theme.colors.gradient};
  border-radius: 100%;

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 100%;
  }

  & svg {
    z-index: 2;
  }
`;

export const Input = styled.input`
  width: 50px;
  border-radius: 20px;
  border-color: transparent;
  outline: none;
  padding: 4px 8px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
`;

export const Price = styled.p`
  margin: 0 auto;
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};

    &:hover {
      fill: red;
    }
  }

  @media screen and (min-width: 1280px) {
    & svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const CapacityWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 42px;
  gap: 5px;
  font-size: 9px;
  @media screen and (min-width: 1280px) {
    font-size: 11px;
    gap: 10px;
    margin-left: 52px;
  }
`;

export const Capacity = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(99, 99, 99);
`;

export const SealingHolders = styled.div`
  display: flex;
  align-items: center;

  gap: 2px;
  @media screen and (min-width: 1280px) {
    gap: 5px;
  }
`;
