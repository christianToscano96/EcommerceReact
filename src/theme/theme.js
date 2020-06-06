import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

    typography : {
        useNextVariants : true
    },
    palette : {
        primary : {
            main : '#10A75F'
        },
        commom : {
            white : 'white'
        },
        secondary : {
            main : '#e5395'
        }
    },
    spacing : 10
});

export default theme;