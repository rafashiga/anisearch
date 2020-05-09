import styled from 'styled-components';
import Wallpaper from '../../assets/img/wallpaper.jpg';

const gradientColor = `
background-image: linear-gradient(
  to right,
  var(--color-primary),
  var(--color-secondary)
);
-webkit-background-clip: text;
color: transparent;
`;

export const Card = styled.div`
  background: var(--color-grey);
  color: #fff;
  padding: 2rem 3rem;
  background-image: linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      transparent 50%
    ),
    url(${Wallpaper});
  background-size: 100%;
  border-radius: 0.75rem;
  -webkit-box-shadow: 9px 9px 18px #292b2c, -9px -9px 1.2rem #373a3c;
  box-shadow: 9px 9px 18px #292b2c, -9px -9px 1.2rem #373a3c;
  min-height: 30rem;

  display: flex;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  ${gradientColor}
`;

export const CardSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-grey-2);
`;

export const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  input {
    display: block;
    width: 100%;
    margin: 0 0 3rem;
    background: var(--color-grey-dark-3);
    border: 2px solid var(--color-dark);
    border-radius: 0.5rem;
    padding: 1rem 0 1rem 1rem;
    color: #fff;
    transition: all 0.2s;
    font-size: 1.2rem;

    &::placeholder {
      color: #7f8489;
      font-size: 1.2rem;
    }

    &:focus {
      outline: 0;
      border-bottom: 2px solid var(--color-secondary);
    }

    + span {
      width: 100%;
      margin: -2.5rem 1rem 1.5rem;
      text-transform: lowercase;
      font-weight: 900;
      ${gradientColor}
    }
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 20rem;
  border: 0;
  color: #fff;
  font-weight: 800;
  box-shadow: 6px 6px 10px var(--color-dark), -6px -6px 10px var(--color-dark);
  background-image: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );
  border: 2px solid var(--color-secondary);
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;
