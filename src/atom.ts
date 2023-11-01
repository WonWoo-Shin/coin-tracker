import { atom } from "recoil";

export const isDarkState = atom({
  key: "isDarkState",
  default: false,
});

export const isSideActiveState = atom({
  key: "isSideActiveState",
  default: false,
});
