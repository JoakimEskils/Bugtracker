import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: 'white',
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold',
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: 'white',
      },
    },
    MuiFab: {
      root: {
        backgroundColor: 'white',
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    info: {
      main: '#2196f3',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f4f6f8',
    },
  },
});

export default theme;

