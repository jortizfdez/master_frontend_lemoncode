import * as React from 'react';
import {Link} from 'react-router-dom';
import { routesLinks } from 'core';
import { LoginContainer } from 'pods';
import { CenteredLayout } from 'layout';

export const LoginScene = () => {

    return (
        <CenteredLayout>
            <LoginContainer/>
        </CenteredLayout>
    )
}