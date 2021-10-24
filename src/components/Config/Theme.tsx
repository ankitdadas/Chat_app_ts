import { createMuiTheme } from  '@mui/material/styles';

export const blueTheme = createMuiTheme({
  palette: {
   // type: 'light',
    grey: {
      300:'#858585',
      400:'#000000',
      500:'#008080',  // color for archive 
      600:'#008080', // color for archive Hover
      700: '#cccccc', // color for left nav 
      800: '#000000',  // color for left nav  hover   
      900: '#ededed',  // color for left nav  hover    
    },
    
    secondary: {
      main: '#31AAB7',
      dark: '#31a6b3',
      contrastText: '#FFF',
    },
    primary: {
      main: '#0078CE',
      dark: '#309fef',
      contrastText: '#fff',
    },
    error: {
      main: '#e51607',
      dark: '#FF0000',
      contrastText: '#FFEFEF',
    },

    background: {
      default: '#f1f1f1',
      paper: '#fff',
    },
    text: {
      primary: '#252525',
      secondary: '#505050',
      disabled: '#A0A0A0',
      //tooltip: '#DCDCDC',
    },
   // divider: '#DEE1E3',
  },
 
   
});

export default blueTheme;