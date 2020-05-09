import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const titleColor = `
background-image: linear-gradient(
  to right,
  var(--color-primary),
  var(--color-secondary)
);
-webkit-background-clip: text;
color: transparent;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0 0 4rem;
  ${titleColor}
  font-weight: 900;
`;

export const Card = styled.div`
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  -webkit-box-shadow: 9px 9px 18px #292b2c, -9px -9px 18px #373a3c;
  background: linear-gradient(to right bottom, #2e3138 0.35%, #3d4148);
  box-shadow: 4px 4px 16px #1f2427;

  @media (min-width: 768px) {
    min-height: 18rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--color-grey-light);
`;

export const CardTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 900;
  color: #7f8489;
`;

export const CardClose = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.75rem;
  background: linear-gradient(320.66deg, #2f353a 14.75%, #1c1f22 84.81%);
  box-shadow: 6px 6px 12px #25292e, -6px -6px 12px #33373e;
  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.4;
  }
`;

export const CardBody = styled(PerfectScrollbar)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 1rem;
  max-height: 25rem;

  @media (min-width: 768px) {
    max-height: 18rem;
  }
`;

export const Anime = styled.div`
  padding: 0 1rem 1rem 1rem;
  width: 30rem;
  display: flex;

  img {
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    img {
      width: 10rem;
    }
  }
`;

export const AnimeInfo = styled.div`
  padding: 0 1rem;

  h3 {
    width: 100%;
    font-size: 1.2rem;
    color: var(--color-grey-light);
    margin-bottom: 4px;
  }

  p {
    color: var(--color-grey-2);
    text-align: justify;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
