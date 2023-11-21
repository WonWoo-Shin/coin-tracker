import styled from "styled-components";

export const CoinsCotainer = styled.div`
  width: auto;
  height: 90%;
  padding-top: 4px;
  overflow-y: scroll;
  margin-right: 1px;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
