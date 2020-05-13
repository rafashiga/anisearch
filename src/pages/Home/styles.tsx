import styled from 'styled-components';

import Wallpaper from '../../assets/img/wallpaper.jpg';
import WallpaperLight from '../../assets/img/wallpaper-light.jpg';

export const Card = styled.div`
  position: relative;
  color: #fff;
  padding: 2rem 3rem;
  background-image: linear-gradient(
      105deg,
      ${(props) => props.theme.colors.card} 0%,
      ${(props) => props.theme.colors.card} 50%,
      transparent 50%
    ),
    url(${(props) =>
      props.theme.title === 'dark' ? Wallpaper : WallpaperLight});
  border: 5px solid ${(props) => props.theme.colors.cardBackground};
  box-shadow: 1px 1px 12px 5px ${(props) => props.theme.colors.cardBackground};

  background-size: 100%;
  border-radius: 0.75rem;
  min-height: 30rem;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const CardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    width: 50%;
  }
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
    border: none;
    width: 100%;
    margin: 0 0 3rem;
    background: ${(props) => props.theme.colors.input.background};
    padding: 1rem 0 1rem 1rem;
    color: ${(props) => props.theme.colors.input.color};
    transition: all 0.2s;
    font-size: 1.2rem;
    border-bottom: 5px solid transparent;

    &::placeholder {
      color: #7f8489;
      font-size: 1.2rem;
    }

    &:focus {
      outline: 0;
      border-bottom: 5px solid ${(props) => props.theme.colors.primary};
    }

    + span {
      width: 100%;
      margin: -2.5rem 1rem 1.5rem;
      text-transform: lowercase;
      font-weight: 900;
      color: ${(props) => props.theme.colors.danger};
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
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Switcher = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
