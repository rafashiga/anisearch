import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 0.5rem;
    background: #fff;
    animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  div:nth-child(2) {
    left: 20px;
    animation-delay: -0.12s;
  }

  div:nth-child(3) {
    left: 32px;
    animation-delay: 0;
  }

  @keyframes loading {
    0% {
      top: 8px;
      height: 54px;
    }
    50%,
    100% {
      top: 24px;
      height: 20px;
    }
  }
`;
