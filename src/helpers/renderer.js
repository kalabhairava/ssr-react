// rendering logic
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../routes/Routes';

export default (request) => {
    const content = renderToString(
        // Pass an empty object for context
        // NOTE: StaticRouter won't have access to the URL, which makes it necessary to explicitly specify the URL.
        // The URL here comes from the request passed to the express server
        <StaticRouter location={request.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    return `
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
