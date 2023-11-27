import styled from "styled-components";

export const Search = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
  border-radius: 20px;
  width: 90%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.05);
  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 18px;
    color: gray;
    &:focus {
      outline: none;
    }
  }
`;

export const CoinsCotainer = styled.div`
  width: 100%;
  height: 80%;
  padding-top: 4px;
  overflow-y: scroll;
  /* margin-right: 1px; */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-button:vertical:start,
  &::-webkit-scrollbar-button:vertical:end {
    height: 7px;
  }
`;

export const CoinList = styled.ul`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  place-items: center;
`;

export const Coin = styled.li`
  width: 100px;
  height: 150px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  span {
    transition: transform 0.1s ease-in-out;
  }
  :hover {
    div,
    span {
      transform: scale(1.1);
    }
  }
`;

export const CoinImg = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  background-color: #fefdfe;
  border-radius: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;
  img {
    width: 70%;
    height: 70%;
  }
`;
