import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Issues from './Issues';


export default function Routes() {
    return (
        <Switch>
            <Route path="/issues" >
                <Issues />
            </Route>
            <Route path="/" exact>
                <Redirect to="/issues" />
            </Route>
        </Switch>
    );
}

