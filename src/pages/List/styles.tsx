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
  font-size: 3rem;
  margin: -2rem 0 4rem;
  ${titleColor}
`;

export const Card = styled.div`
  border-radius: 1rem;
  -webkit-box-shadow: 9px 9px 18px #292b2c, -9px -9px 18px #373a3c;
  box-shadow: 9px 9px 18px #292b2c, -9px -9px 18px #373a3c;
  min-height: 18rem;
  background: var(-color-grey-1);
  color: var(--color-grey-light);
  padding: 2rem 3rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  ${titleColor}
`;

export const CardClose = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  margin-top: -1rem;
  ${titleColor}
`;

export const CardBody = styled(PerfectScrollbar)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  height: 24rem;
`;

export const Anime = styled.div`
  padding: 1rem;

  h3 {
    text-align: center;
    width: 10rem;
    font-size: 1.2rem;
    margin: 0 auto;
  }

  img {
    width: 10rem;
    margin-bottom: 1rem;
  }
`;
