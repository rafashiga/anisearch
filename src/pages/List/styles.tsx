import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0 0 4rem;
  font-weight: 900;
`;

export const Card = styled.div`
  padding: 2rem 3rem;
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    min-height: 18rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 900;
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
