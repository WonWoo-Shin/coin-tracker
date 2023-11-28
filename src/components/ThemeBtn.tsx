import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { isDarkState } from "../atom";
import { ThemeBtnContainer, ThemeBtnInput } from "../style/SideMenu";

function ThemeBtn() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const btn = document.getElementById("btn") as HTMLInputElement;
  if (btn != null) {
    btn.checked = isDark ? true : false;
  }
  return (
    <ThemeBtnContainer>
      <ThemeBtnInput
        type="checkbox"
        onChange={() => setIsDark(btn.checked)}
        id="btn"
      />
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faMoon} />
    </ThemeBtnContainer>
  );
}

export default ThemeBtn;
