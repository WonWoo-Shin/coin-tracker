import { useRecoilValue } from "recoil";
import { SideMenuStyle } from "../style";
import { isSideActiveState } from "../atom";

function SideMenu() {
  const isSideActive = useRecoilValue(isSideActiveState);
  return (
    <SideMenuStyle
      style={{ width: isSideActive ? "250px" : 0 }}
    ></SideMenuStyle>
  );
}

export default SideMenu;
