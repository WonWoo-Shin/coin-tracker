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

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

export const LoadingContanier = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
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
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.textColor};
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
      background-color: ${(props) => props.theme.bgColor};
      position: absolute;
      top: 0px;
      left: 0px;
    }
    &:last-child {
      width: 60%;
      height: 60%;
      background-color: ${(props) => props.theme.bgColor};
      border-radius: 50%;
    }
  }
`;

export const CoinsList = styled.ul``;

export const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 20px;
  border-radius: 20px;
  transition: transform 0.1s ease-in-out;
  a {
    padding: 20px;
    display: flex;
    align-items: center;
    transition: color 0.1s ease-in-out;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  &:hover {
    transform: scale(103%);
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Overview = styled.div`
  background-color: #1e272e;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
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

export const Description = styled.p`
  margin-top: 20px;
  padding: 0 10px;
  line-height: 25px;
  font-size: 18px;
`;

export const Tabs = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-around;
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? props.theme.accentColor : "#1e272e"};
  border-radius: 15px;
  transition: all 0.1s ease-in-out;
  a {
    width: 160px;
    height: 40px;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid
      ${(props) => (props.$isActive ? props.theme.accentColor : "#1e272e")};
    transition: inherit;
    &:hover {
      border: 2px solid ${(props) => props.theme.accentColor};
    }
  }
`;
