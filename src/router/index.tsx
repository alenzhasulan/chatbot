import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout/index'

import Home from '../screens/Home/index'
import Chats from '../screens/Chats/index'
import Builder from '../screens/Builder/index'

const AppRoute: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Switch >
                    <Route path="/chats" component={Chats} />
                    <Route exact path="/chat" component={Home} />
                    <Route path="/builder/:id" component={Builder} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default AppRoute;
