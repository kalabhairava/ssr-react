import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    const content = renderToString(<Home />);

    const html = `<html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>`;
    response.send(html);
});

app.listen(3000, () => console.log('server running at port 3000'));
