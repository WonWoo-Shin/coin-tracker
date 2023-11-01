import { createGlobalStyle, keyframes, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  background-color: ${(props) => props.theme.bgColor};
  color : ${(props) => props.theme.textColor}
}
a{
  text-decoration: none;
  color: inherit;
}
`;

export const SideMenuStyle = styled.aside`
  width: 250px;
  height: 100vh;
  border-right: 2px solid ${(props) => props.theme.boxColor};
  position: absolute;
  top: 0;
  transition: width 0.3s ease-in-out;
`;

export const ThemeBtnStyle = styled.div<{ $isDark: boolean }>`
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isDark ? "#FFFFFF" : "#1e272e")};
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderStyle = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

export const MainIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 24px;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const MenuBar = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  color: #858585;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

export const Box = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 50px;
  position: relative;
`;

export const Logo = styled.img<{ height: string }>`
  height: ${(props) => props.height};
`;

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

export const GoHome = styled.div`
  border-radius: 30%;
  opacity: 0.5;
  background-color: ${(props) => props.theme.tabColor};
  position: absolute;
  top: 34px;
  left: 0px;
  font-size: 20px;
  transition: opacity 0.1s ease-in-out;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
  &:hover {
    opacity: 0.7;
  }
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
