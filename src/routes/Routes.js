import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../client/components/Home';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/boom" component={() => 'Shakalaka Boom Boom'} />
        </div>
    );
};
