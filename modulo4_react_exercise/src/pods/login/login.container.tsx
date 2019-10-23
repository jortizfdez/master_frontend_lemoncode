import * as React from "react";
import { LoginComponent } from "./login.component";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks, SessionContext } from "core";
import {
  CredentialsEntityVm,
  createEmptyCredentials,
  LoginFormErrors,
  createDefaultLoginFormErrors
} from "./login.vm";
import { validateCredentials } from "./login.api";
import { loginFormValidation } from "./login.validation";
import { FieldValidationResult, FormValidationResult } from "lc-form-validation";

interface Props extends RouteComponentProps {}

const LoginContainerInner = (props: Props) => {
  const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(
    createDefaultLoginFormErrors()
  );
  const [credentials, setCredentials] = React.useState<CredentialsEntityVm>(
    createEmptyCredentials()
  );
  const { history } = props;
  const { username, password } = credentials;
  const { updateLogin } = React.useContext(SessionContext);

  const doLogin = () => {
    loginFormValidation.validateForm(credentials).then(formValidationResult => {
        handleFormValidation(formValidationResult);
    });
  };

  const handleFormValidation = (formValidationResult: FormValidationResult) => {
    if (formValidationResult.succeeded) {
        doServerLogin();
      } else {
        showLoginFormErrors(formValidationResult);
      }
  }

  const doServerLogin = () => {
    validateCredentials(username, password).then(
        areValidCredentials => {
          if (areValidCredentials) {
            updateLogin(username);
            history.push(routesLinks.hotelCollection);
          } else {
            alert("Invalid credentials")
          }
        });
  }

  const showLoginFormErrors = (formValidationResult: FormValidationResult) => {
    alert("error, review the fields");
    const updatedLoginFormErrors = {
      ...loginFormErrors,
      ...formValidationResult.fieldErrors
    };
    setLoginFormErrors(updatedLoginFormErrors);
  }

  const onUpdateCredentialsField = (fieldId: string, value: string) => {
    setCredentials({
      ...credentials,
      [fieldId]: value
    });

    loginFormValidation.validateField(credentials, fieldId, value)
        .then((fieldValidationResult) => {
            setLoginFormErrors({
                ...loginFormErrors,
                [fieldId]: fieldValidationResult,
            })
        });

  }

  return (
    <LoginComponent
      onLogin={doLogin}
      credentials={credentials}
      onUpdateCredentials={onUpdateCredentialsField}
      loginFormErrors={loginFormErrors}
    />
  );
};

export const LoginContainer = withRouter<Props>(LoginContainerInner);
