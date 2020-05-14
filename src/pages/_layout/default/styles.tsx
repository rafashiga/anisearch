import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 90%;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
