import { createMuiTheme } from "@material-ui/core";
import { amber, grey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: grey[800],
    }
  },
  shadows: ['none'],
});