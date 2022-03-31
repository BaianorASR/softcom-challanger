import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: ${props => props.theme.primary};
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: ${props => props.theme.colors.text.title};
`;
