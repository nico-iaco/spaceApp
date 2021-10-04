import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import AppRouter from "./routers/AppRouter";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createTheme} from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#dedede', //Change the primary color
        },

        secondary: {
            main: '#ffffff',
            // dark: will be calculated from palette.secondary.main,
        },
        // error: will use the default color
    },
    typography: {
        fontSize:"16px",

    }
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <AppRouter/>
    </MuiThemeProvider>
    , document.getElementById('root'));
