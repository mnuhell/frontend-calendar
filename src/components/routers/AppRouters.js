import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../auth/Login';
import { CalendarScreen } from '../calendar/CalendarScreen';

export const AppRouters = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/login" component={ Login } />
                <Route exact path="/" component={ CalendarScreen } />
                
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
