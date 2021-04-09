import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { render } from 'react-dom';

import { App } from './App';
import { darkTheme } from './Theme';

function AppRoot() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
}

render(<AppRoot />, document.getElementById('root'));
