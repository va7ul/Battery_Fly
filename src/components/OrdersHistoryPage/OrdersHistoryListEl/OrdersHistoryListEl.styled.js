import styled from 'styled-components';

export const getStatusColor = props => {
  switch (props.type) {
    case 'Нове':
      return props.theme.colors.warning;
    case 'В роботі':
      return props.theme.colors.hoverColor;
    case 'Скасовано':
      return props.theme.colors.error;
    case 'Доставлено':
      return props.theme.colors.success;
    default:
      return;
  }
};

export const StyledText = styled.p`
  font-weight: 700;
  color: ${getStatusColor};
`;

export const OrderDetailsList = styled.ul`
  grid-column: 1/6;
  background: papayawhip;
  padding: 5px 10px;

  li {
    display: grid;
    grid-template-columns: 60px 100px repeat(3, 1fr);
    padding-top: 5px;
    padding-bottom: 5px;

    @media screen and (min-width: 1280px) {
      grid-template-columns: 100px 250px repeat(3, 1fr);
      padding-top: 15px;
      padding-bottom: 15px;
    }

    :not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colors.textDisabled};
    }
  }
`;