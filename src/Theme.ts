import { colors, createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: colors.yellow[400]
        }
    }
});
