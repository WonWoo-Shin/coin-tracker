import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkState, isSideActiveState } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderStyle, MainIcon, MenuBar } from "../style/Header";
import { Logo } from "../style/Main";

function Header() {
  const isDark = useRecoilValue(isDarkState);
  const setIsSideActive = useSetRecoilState(isSideActiveState);
  return (
    <HeaderStyle>
      <MainIcon>
        <MenuBar onClick={() => setIsSideActive((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBar>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <Logo
            src={
              isDark
                ? `${process.env.PUBLIC_URL}/logo_dark.png`
                : `${process.env.PUBLIC_URL}/logo_light.png`
            }
            alt=""
            height="50px"
          />
        </Link>
      </MainIcon>
    </HeaderStyle>
  );
}

export default Header;
