import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeBtnStyle } from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ThemeBtnProps {
  toggleTheme: () => void;
  isDark: boolean;
}

function ThemeBtn({ toggleTheme, isDark }: ThemeBtnProps) {
  return (
    <ThemeBtnStyle onClick={toggleTheme} isDark={isDark}>
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        style={isDark ? { color: "#FF9500" } : { color: "#8c7ae6" }}
      />
    </ThemeBtnStyle>
  );
}

export default ThemeBtn;
