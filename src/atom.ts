import { atom } from "recoil";

export const isDarkState = atom({
  key: "isDarkState",
  default: false,
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("isDark");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("isDark")
          : localStorage.setItem("isDark", JSON.stringify(newValue));
      });
    },
  ],
});

export const isSideActiveState = atom({
  key: "isSideActiveState",
  default: false,
});
