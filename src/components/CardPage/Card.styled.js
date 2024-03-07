import styled from 'styled-components';
import { FaRegHeart, FaHeartCircleCheck } from 'react-icons/fa6';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

// Card

export const Wrapper = styled.div`
  padding: 15px 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 30px 110px;
    max-width: 1280px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Case = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;
//  ProductPhoto

export const Image = styled.img`
  max-width: 320px;
  height: 330px;
  margin-bottom: 5px;
  border-radius: 12px;

  @media screen and (min-width: 1280px) {
    max-width: 520px;
    height: 525px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 30px;
  }
`;

// Description

export const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Price = styled.p`
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const IconHeart = styled(FaRegHeart)`
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.5);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;

export const IconFullHeart = styled(FaHeartCircleCheck)`
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.5);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
  }
`;

export const LikeBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const Like = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const IconSquare = styled.svg`
  width: 35px;
  height: 35px;
  position: absolute;
  top: -387px;
  left: 122px;
  fill: ${props => props.theme.colors.secondary};

  @media (min-width: 1280px) {
    width: 62px;
    height: 62px;
    left: 438px;
    top: -12px;
    z-index: 2;
  }
`;

export const IconSpiral = styled.svg`
  width: 35px;
  height: 43px;
  position: absolute;
  top: -381px;
  left: 105px;
  stroke: ${props => props.theme.colors.textPrimary};
  fill: transparent;

  @media (min-width: 1280px) {
    width: 62px;
    height: 76px;
    left: 407px;
    top: -1px;
    z-index: 2;
  }
`;

export const Desc = styled.ul`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Item = styled.li`
  list-style: outside;
`;

// Capacity

export const CapacityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Subtitle = styled.p`
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const SelectDiv = styled.select`
  /* -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; */
  outline: none;
  cursor: pointer;
  width: 105px;
  height: 30px;
  padding: 8px;
  font-size: 10px;
  border: 1px solid ${props => props.theme.colors.textPrimary};
  border-radius: 6px;
  background: ${props => props.theme.colors.greyBackgroundPaper};

  /* &::-ms-expand {
    display: none;
  } */
  /* &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px orange, 0px 0px 1px red;
  } */

  @media screen and (min-width: 1280px) {
    width: 208px;
    height: 42px;
    padding: 7px 15px;
    border-radius: 12px;
    font-size: 20px;
  }
`;

export const OptionsItem = styled.option`
  padding: 8px;

  &:checked {
    background-color: red;
  }
  @media screen and (min-width: 1280px) {
  }
`;

// CheckBox

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    gap: 14px;
    margin-bottom: 38px;
  }
`;

// Order

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 0px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const Input = styled.input`
  font-size: 15px;
  width: 76px;
  height: 35px;
  padding: 8px 12px;
  appearance: none;
  border: none;
  outline-style: none;
  text-align: center;
  border-radius: 190px;
  background: ${props => props.theme.colors.greyBackgroundPaper};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    width: 90px;
    height: 50px;
    padding: 14px 20px;
  }
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 50%;
  }

  @media screen and (min-width: 1280px) {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const BasketButton = styled.button`
  width: 130px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 6px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;

export const OrderButton = styled.button`
  width: 170px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 6px;
  }

  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;

    &::after {
      border-radius: 20px;
    }
  }
`;

// Information

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Subject = styled.h2`
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 12px;
  text-align: center;
  padding: 6px;

  @media screen and (min-width: 1280px) {
    height: 42px;
    font-size: 20px;
  }
`;

export const Info = styled.div`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;