import styled from "styled-components";

export const SideMenuStyle = styled.aside<{ $isSideActive: boolean }>`
  width: 250px;
  height: 100vh;
  padding-top: 100px;
  border-right: 2px solid ${(props) => props.theme.boxColor};
  position: absolute;
  top: 0;
  transform: translateX(${(props) => (props.$isSideActive ? 0 : "-100%")});
  transition: transform 0.3s ease-in-out;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ThemeBtnContainer = styled.div`
  width: 70px;
  height: 40px;
  background-color: #cccccc;
  border-radius: 20px;
  position: relative;
  padding: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000000;
`;

export const ThemeBtnInput = styled.input<{ $isDark: boolean }>`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  margin: 0;
  /*체크 안 된 상태*/
  &::before {
    content: "";
    position: absolute;
    right: 0;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
  }
  /*체크된 상태*/
  &:checked::before {
    content: "";
    position: absolute;
    left: 0;
  }
  &:checked::after {
    content: "";
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    top: 50%;
    left: 33px;
    transform: translateY(-50%);
    background-color: #ffffff;
  }
`;
