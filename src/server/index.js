import express from 'express';
import renderer from '../helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send(renderer(request));
});

app.listen(3000, () => console.log('server running at port 3000'));
