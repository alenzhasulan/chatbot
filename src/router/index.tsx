import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '../components/Layout/index'

import Home from '../screens/Home/index'
import Chats from '../screens/Chats/index'
import Builder from '../screens/Builder/index'
import Message from '../screens/Message'

const AppRoute: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Router >

                <Switch>
                    <Layout>
                        {/* <Route path="/" component={Chats} /> */}
                        <Route path="/chats" component={Chats} />
                        <Route exact path="/chat" component={Home} />
                        <Route path="/builder/:id" component={Builder} />
                        <Route path="/message" component={Message} />
                        <Redirect to="/chats" />
                    </Layout>

                </Switch>

            </Router>
        </div>
    );
}

export default AppRoute;
