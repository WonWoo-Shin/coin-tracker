import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { isDarkState } from "../atom";
import { ThemeBtnContainer, ThemeBtnInput } from "../style/SideMenu";

function ThemeBtn() {
  const setIsDark = useSetRecoilState(isDarkState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsDark(event.currentTarget.checked);
  return (
    <ThemeBtnContainer>
      <ThemeBtnInput type="checkbox" onChange={onChange} />
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faMoon} />
    </ThemeBtnContainer>
  );
}

export default ThemeBtn;
