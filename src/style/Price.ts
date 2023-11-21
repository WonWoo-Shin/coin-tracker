import styled from "styled-components";

export const PriceError = styled.div`
  text-align: center;
  div {
    margin-top: 30px;
    font-size: 20px;
  }
`;

export const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 90px);
  gap: 20px;
`;

export const HighCost = styled.div`
  background-color: ${(props) => props.theme.tabColor};
  border-radius: 15px;
  grid-column: span 2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    &:first-child {
      line-height: 25px;
      text-align: center;
    }
    &:last-child {
      color: ${(props) => props.theme.accentColor};
      font-weight: 600;
      font-size: 25px;
    }
  }
`;

export const CostItemStyled = styled.div<{ $percentColor: string }>`
  background-color: ${(props) => props.theme.tabColor};
  border-radius: 15px;
  padding: 15px;
  div {
    &:first-child {
      margin-bottom: 15px;
      text-align: center;
      font-size: 15px;
    }
    &:last-child {
      color: ${(props) => props.$percentColor};
      display: flex;
      justify-content: space-around;
      font-size: 25px;
    }
  }
`;

export const ChartContainer = styled.div`
  border-radius: 15px;
  padding: 7px;
  background-color: ${(props) => props.theme.tabColor};
`;
