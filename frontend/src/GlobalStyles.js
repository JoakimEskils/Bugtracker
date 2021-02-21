import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CssOverrides = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // Remove trailing table border
    '.MuiTableRow-root:last-child td, .MuiTableRow-root:last-child th': {
      border: 0,
    },
  },
})(() => null);

export default function GlobalStyles() {
  return (
    <>
      <CssBaseline />
      <CssOverrides />
    </>
  );
}

