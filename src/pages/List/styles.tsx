import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0 0 2rem;
  font-weight: 900;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    margin: 0 0 4rem;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.cardBackground};
  border: 5px solid ${(props) => props.theme.colors.cardBackground};
  box-shadow: 1px 1px 12px 5px ${(props) => props.theme.colors.cardBackground};
  height: 20rem;

  @media (min-width: 768px) {
    padding: 2rem 3rem;
    height: 24rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
`;

export const CardSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`;

export const CardClose = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
  background: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const CardBody = styled(PerfectScrollbar)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  max-height: 12rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
    max-height: 16rem;
  }
`;

export const Anime = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: flex;

  img {
    margin-bottom: 1rem;
    border-radius: 10px;
    width: 100px;
    height: 180px;
  }

  @media (min-width: 768px) {
    width: 50%;

    img {
      width: 30%;
      height: auto;
    }
  }
`;

export const AnimeInfo = styled.div`
  padding: 0 1rem;

  h3 {
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
