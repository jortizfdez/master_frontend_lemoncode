import { createStyles, Theme } from "@material-ui/core";
import { CenteredLayout } from "layout";

export const styles = (theme : Theme) => 
  createStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',      
        justifyContent: 'center'  
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "40%"
      },
      textArea: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "80%"
      },
      dense: {
        marginTop: theme.spacing(2),
      },
      menu: {
        maxWidth: "31.25rem"
      },
      picture: {
        marginLeft: theme.spacing(1),
        maxWidth: "40%"
      },
      button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      label: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  

  });
