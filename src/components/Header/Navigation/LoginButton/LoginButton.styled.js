import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${props => props.theme.colors.hoverColor};

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
