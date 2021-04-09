import { colors, createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    
    error: {
      main: colors.red.A400
    }
  },
  typography: {
    fontSize: 14
  }
});
