import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouters } from './components/routers/AppRouters';


export const CalendarApp = () => {

    return (
        <Router>
            <AppRouters />
        </Router>
        
    )
}