// Use CommonJS module pattern as this code will run in node environment.
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const content = renderToString(<Home />);

    response.send(content);
});

app.listen(3000, () => console.log('server running at port 3000'));
