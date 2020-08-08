import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout/index'

import Home from '../screens/Home/index'
import Help from '../screens/Help/index'
import Builder from '../screens/Builder/index'

const AppRoute: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/builder/:id" component={Builder} />
                    <Route path="/help" component={Help} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default AppRoute;
