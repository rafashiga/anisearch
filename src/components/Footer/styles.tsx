import styled from 'styled-components';

export const Container = styled.footer`
  text-align: center;
  padding: 10px 0;
  height: 9%;
  margin: 0;
  margin-top: -1rem;
  font-weight: 700;

  a {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bolder;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
