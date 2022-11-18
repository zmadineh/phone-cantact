import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    direction: 'ltr',

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#fff',
                    color: '#212124',
                    'a' : {
                        textDecoration: "none",
                        color: "inherit",
                    }
                }
            },

            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    fontSize: 16,
                },
            },
        },
    },

    // breakpoints: {
    //     values: {
    //         mobile: 0,
    //         tablet: 640,
    //         laptop: 1024,
    //         desktop: 1200,
    //     },
    // },

    palette: {
        primary: {
            main: '#001952',
            light: '#222E49A1',
            lighter: '#1223463A',
        },
        secondary: {
            main: '#eef4fd',
            light: '#ebedf1',
            lighter: 'rgba(235,237,241,.3)'
        },
        error: {
            main: '#eb4137',
            light: '#f5a09bb2',
            lighter: '#f5a09b1a',
        },
        warning: {
            main: '#fbbd06',
            light: '#fdde82b2',
            lighter: '#fdde821a',
        },
        info: {
            main: '#4a7f9c',
            light: '#60abd547',
            lighter: '#60abd51a',
        },
        success: {
            main: '#30be81',
            light: '#a0d6aeb2',
            lighter: '#a0d6ae1a',

        },
        text: {
            primary: '#212124',
            secondary: '#00000099',
            mute: '#bdbdbd'

        },
        action: {
            disabledBackground: '#6c759624',
            selected: '#00000014',
        },

        divider: '#2121211C',

        // skeleton: '#e0e0e0',

        background: {
            default:'#fff',
            secondary: '#fafafa',
            paper: '#fff',
        },

        grey: {
            '100' : '#e0e0e0',
        }
    },

    typography: {
        fontFamily: [
            'IRANSans',
            'Poppins',
            'sans-serif',
        ].join(','),

        h1: {
            fontSize: '1.71rem',
        },
        h2: {
            fontSize: '1.57rem',
        },
        h3: {
            fontSize: '1.42rem',
        },
        h4: {
            fontSize: '1.28rem',
            fontWeight: '700',
        },
        h5: {
            fontSize: '1.14rem',
        },
        h6: {
            fontSize: '1rem',
        },
        body1: {
            fontSize: '0.85rem',
            fontWeight: '400',
        },
        body2: {
            fontSize: '0.77rem',
            fontWeight: '300',
        },
        caption: {
            fontSize: '0.71rem',
        },
        overline: {
            fontSize: '0.64rem',
        },
    },

    // shadows: Array(25).fill('none')
    shadows: [
        '0px 0px 4px rgba(0,0,0,.14)',
        '0px 12px 32px rgba(0,0,0,.04)',
        '0px 40px 72px rgba(#4285F2, 0.08)',
    ],
});