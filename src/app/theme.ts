import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A59D1',
      light: '#A0C4F8',
    },
    secondary: {
      main: '#7AC6D2',
    },
    background: {
      default: '#f5f7fa',
    },
    action: {
      selected: '#A0C4F8',
    },
    text: {
      primary: '#18191B', // neutral-900
      secondary: '#6D747E', // neutral-500
      disabled: '#9FA4AC', // neutral-400
    },
    grey: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E5E7',
      300: '#D3D6D9',
      400: '#9FA4AC',
      500: '#6D747E',
      600: '#50555D',
      700: '#3E4247',
      800: '#26282B',
      900: '#18191B',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
