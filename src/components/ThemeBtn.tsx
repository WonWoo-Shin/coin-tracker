import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeBtnStyle } from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { isDarkState } from "../atom";

function ThemeBtn() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  return (
    <ThemeBtnStyle onClick={() => setIsDark((prev) => !prev)} $isDark={isDark}>
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        style={isDark ? { color: "#FF9500" } : { color: "#8c7ae6" }}
      />
    </ThemeBtnStyle>
  );
}

export default ThemeBtn;
