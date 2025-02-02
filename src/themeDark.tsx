import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#3c3c3c',
      main: '#b89dfc',
      dark: '#606060',
      contrastText: '#fff',
    },
    secondary: {
      light: '#3c3c3c',
      main: '#e8e9ff',
      dark: '#818181',
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
