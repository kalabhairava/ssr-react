import express from 'express';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    // Create a store here so that we can call the rendering function
    // only when all the information for rendering are available
    const store = createStore();

    // Initialize the store

    // render static html and send it to the client
    response.send(renderer(request, store));
});

app.listen(3000, () => console.log('server running at port 3000'));
