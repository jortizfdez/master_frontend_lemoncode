import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { SessionContext } from 'core';

interface Props {

};

export const AppLayout : React.FunctionComponent<Props> = (props) => {

    const loginContext = React.useContext(SessionContext);

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="Menu">
                        <AccountCircleIcon></AccountCircleIcon>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {loginContext.login}
                    </Typography>
                </Toolbar>
            </AppBar>
            {props.children}
        </div>
    );
}
