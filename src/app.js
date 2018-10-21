import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import AppRouter from "./routers/AppRouter";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import * as color from "chart.js";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#94a89a', //Change the primary color
        },

        secondary: {
            main: '#cf0a00',
            // dark: will be calculated from palette.secondary.main,
        },
        // error: will use the default color
    },
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <AppRouter/>
    </MuiThemeProvider>
    , document.getElementById('root'));
