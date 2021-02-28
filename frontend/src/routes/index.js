import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Issues from './Issues';
import Dashboard from './Dashboard';


export default function Routes() {
    return (
        <Switch>
            <Route path="/home" >
                <Dashboard />
            </Route>
            <Route path="/issues" >
                <Issues />
            </Route>
            <Route path="/" exact>
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
}

