import { DefaultTheme } from "styled-components";
import { Colors, Fonts } from "./types";

const lightColors: Colors = {
  primary: "#FFFFFF",
  secondary: "#000000",
  primaryBackground: "#000000",
  secondaryBackground: "#FFFFFF",
  secondaryText: "#E99B4D",
  primaryGradient:
    "linear-gradient(91.66deg, #977F93 0%, #E99B4D 33.17%, #B49AC6 86.15%)",
};
const fonts: Fonts = {
  primary: "EditorNote",
  secondary: "Eina03",
};
const lightTheme: DefaultTheme = {
  isDark: false,
  colors: lightColors,
  fonts: fonts,
};

export default lightTheme;
