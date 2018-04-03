import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';
import express from 'express';
const app = express();

app.get('/', (request, response) => {
    const content = renderToString(<Home />);

    response.send(content);
});

app.listen(3000, () => console.log('server running at port 3000'));
