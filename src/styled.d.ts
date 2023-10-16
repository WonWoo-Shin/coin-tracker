import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    tabColor: string;
    boxColor: string;
    loadingColor: string;
  }
}
