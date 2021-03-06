import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../client/components/Home';
import UsersList from '../client/components/UsersList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UsersList} />
            <Route path="/boom" component={() => 'Shakalaka Boom Boom'} />
        </div>
    );
};
