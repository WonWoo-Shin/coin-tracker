import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 20px;
`;

export const OverviewTop = styled.div`
  background-color: ${(props) => props.theme.tabColor};
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  div {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      &:first-child {
        font-size: 13px;
        margin-bottom: 10px;
      }
      &:last-child {
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;

export const Overview = styled(OverviewTop)`
  margin-top: 20px;
`;

export const Description = styled.div`
  height: 400px;
  margin-top: 20px;
  padding: 0 10px;
  line-height: 25px;
  font-size: 18px;
  overflow-y: scroll;
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

export const Tabs = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.tabColor};
  border-radius: 15px;
  /* transition: all 0.1s ease-in-out; */
  a {
    width: 160px;
    height: 40px;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid
      ${(props) =>
        props.$isActive ? props.theme.accentColor : props.theme.tabColor};
    /* transition: border 0.1s ease-in-out; */
    &:hover {
      border: 2px solid ${(props) => props.theme.accentColor};
    }
  }
`;
