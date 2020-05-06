import styled from 'styled-components';
import Wallpaper from '../../assets/img/wallpaper.jpg';

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
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  min-height: 18rem;
`;

export const CardTitle = styled.h1`
  font-size: 1.75rem;
`;

export const CardBody = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  form {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
  }

  input {
    display: block;
    width: 100%;
    background: var(--color-dark);
    border: 0;
    padding: 1rem 0 1rem 1rem;
    border-bottom: 5px solid var(--color-dark);
    color: #fff;
    margin: 0 0 3rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.9);
    }

    &:focus {
      outline: 0;
      border-bottom: 5px solid var(--color-primary);
    }

    + span {
      width: 100%;
      margin: -2.5rem 1rem 1.5rem;
      text-transform: lowercase;
      font-weight: bold;
      color: var(--color-secondary);
    }
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 20rem;
  border: 0;
  color: #fff;
  background: var(--color-primary);
`;
