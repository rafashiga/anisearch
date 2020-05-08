import styled from 'styled-components';

const gradientColor = `
background-image: linear-gradient(
  to right,
  var(--color-primary),
  var(--color-secondary)
);
-webkit-background-clip: text;
color: transparent;
`;

export const Container = styled.footer`
  text-align: center;
  padding: 10px 0;
  height: 9%;
  margin: 0;
  margin-top: -1rem;
  color: var(--color-grey-2);
  font-weight: 700;

  a {
    ${gradientColor}
    font-weight: bolder;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
