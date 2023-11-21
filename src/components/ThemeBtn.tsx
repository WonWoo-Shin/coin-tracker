import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { isDarkState } from "../atom";
import { ThemeBtnContainer, ThemeBtnInput } from "../style/SideMenu";

function ThemeBtn() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  return (
    <ThemeBtnContainer>
      <ThemeBtnInput
        type="checkbox"
        onClick={() => setIsDark((prev) => !prev)}
        $isDark={isDark}
      />
      <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} />
    </ThemeBtnContainer>
  );
}

export default ThemeBtn;
