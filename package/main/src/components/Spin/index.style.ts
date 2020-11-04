import styled from "styled-components"

export const Spin = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  animation: spin 1s linear infinite;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: #fff;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    border: 4px solid grey;
    z-index: 1;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
