import { useRecoilValue } from "recoil";
import { isSideActiveState } from "../atom";
import ThemeBtn from "./ThemeBtn";
import { MenuItem, SideMenuStyle } from "../style/SideMenu";

function SideMenu() {
  const isSideActive = useRecoilValue(isSideActiveState);
  return (
    <SideMenuStyle $isSideActive={isSideActive}>
      <MenuItem>
        <span>다크 테마</span>
        <ThemeBtn />
      </MenuItem>
    </SideMenuStyle>
  );
}

export default SideMenu;
