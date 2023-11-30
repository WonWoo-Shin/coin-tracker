import { keyframes, styled } from "styled-components";

export const Main = styled.main`
  transition: margin-left 0.3s ease-in-out;
`;

export const Container = styled.div`
  max-width: 1400px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 500px;
  height: 700px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 50px;
  position: relative;
`;

export const Logo = styled.img<{ height: string }>`
  height: ${(props) => props.height};
`;

export const LoadingContanier = styled.div`
  display: flex;
  justify-content: center;
`;

const loadingRotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const LoaingCircle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.loadingColor};
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${loadingRotate} 1s linear infinite;
  div {
    &:first-child {
      width: 50%;
      height: 50%;
      background-color: ${(props) => props.theme.boxColor};
      position: absolute;
      top: 0px;
      left: 0px;
    }
    &:last-child {
      width: 75%;
      height: 75%;
      background-color: ${(props) => props.theme.boxColor};
      border-radius: 50%;
    }
  }
`;

export const Error = styled.div`
  text-align: center;
  div {
    margin-top: 30px;
    font-size: 20px;
  }
`;
