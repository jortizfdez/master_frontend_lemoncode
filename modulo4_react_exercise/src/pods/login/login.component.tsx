import { WithStyles, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { TextFieldForm } from "common/components";
import * as React from "react";
import { styles } from "./login.styles";
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";

//Forma antigua de meter CSS in JS, con HOCs en lugar de HOOKS.
interface Props extends WithStyles<typeof styles> {
    onLogin: () => void;
    onUpdateCredentials: (fieldId: string, value:string) => void;
    credentials: CredentialsEntityVm;
    loginFormErrors: LoginFormErrors;
}

const LoginComponentInner = (props: Props) => {
  const { classes, onLogin, credentials , loginFormErrors, onUpdateCredentials } = props;

  const onTextFieldChange = (fieldname: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdateCredentials(fieldname, e.target.value)
  }

  return (
    <>
      <Card>
        <CardHeader title="login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm 
                label="Name" 
                name="username"
                value={credentials.username}
                onChange={onUpdateCredentials}
                error={loginFormErrors.username.errorMessage}
            />
            <TextFieldForm 
                label="Password" 
                name="password"
                type="password" 
                value={credentials.password}
                onChange={onUpdateCredentials}
                error={loginFormErrors.password.errorMessage}
            />
            <Button variant="contained" color="primary" onClick={onLogin}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export const LoginComponent = withStyles(styles)(LoginComponentInner);