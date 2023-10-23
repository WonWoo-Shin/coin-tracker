import { Link } from "react-router-dom";
import { HeaderStyle, Logo, MenuBar } from "../style";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const isDark = useRecoilValue(isDarkState);
  return (
    <HeaderStyle>
      <MenuBar>
        <FontAwesomeIcon icon={faBars} />
      </MenuBar>
      <Link to={"/"}>
        <Logo
          src={isDark ? "/logo_dark.png" : "/logo_light.png"}
          alt=""
          height="50px"
        />
      </Link>
    </HeaderStyle>
  );
}

export default Header;
