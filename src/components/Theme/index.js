import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mainBlue: "#2ccbd1",
    accentRed: "#ff7a7a",
    accentPink: "#d812db",
    mainPurple: "#441854",
    accentPurple: "#d4a6ed",
    blueTextShadow: "#14172b",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
