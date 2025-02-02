import { createTheme } from '@mui/material/styles';

export const themeJustin = createTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#5f2df8',
      dark: '#002884',
      contrastText: '#fff',

    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#979797',
      contrastText: '#000',
    },
    action: {
      disabled: "fff",
      disabledBackground: '#5f2df8'
    },
    
  },
  typography: {
    fontFamily: 'MinecartLCD,MedodicaRegular, Arial, sans-serif', // Verwende deine Schriftart
    fontSize: 16,
    fontWeightLight: 300,
  },
});
