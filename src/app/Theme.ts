import { colors, createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#222"
    },
    secondary: {
      main: "#111"
    },
    error: {
      main: colors.red.A400
    }
  },
  typography: {
    fontSize: 14
  }
});
