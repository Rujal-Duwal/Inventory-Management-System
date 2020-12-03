import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({

    typography: {
        fontSize: 10,
    },

    palette: {
        primary: {
            main: '#152C81',
            light: '#5361B5',
            dark: '#061967'
        },
        secondary: {
            main: '#FF7C00',
            light: '#FFA566',
            dark: '#CF6402'
        },
        error: {
            main: '#FFF301',
            light: '#FCF471',
            dark: '#CDC101'
        },
        warning: {
            main: '#FF010B',
            light: '#FF7168',
            dark: '#9D0000'
        },
        info: {
            main: '#0165B9',
            light: '#5188CA',
            dark: '#004D90'
        },
        success: {
            main: '#00A856',
            light: '#36C590',
            dark: '#006F35'
        }
    }
})