const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Datas = require('./datas.json');

const corsOptions = {
    origin: ['*'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    return res.send('hello world');
});

app.get('/items', (req, res) => {
    if (Datas && Datas?.length <= 0) {
        return res.send({ message: 'Erreur technique' });
    }
    return res.send(Datas);
});

app.get('/items/:id([0-9]+)', (req, res) => {
    const id = parseInt(req.params.id);

    if (Datas && Datas?.length <= 0) {
        return res.send({ message: 'Erreur technique' });
    }

    if (!id && id <= 0) {
        return res.send({ message: 'Erreur technique' });
    }

    return res.send(Datas?.filter((data) => data.id === id));
});

app.listen(3000, () => console.log(`🚀 Server ready at: 3000 ⭐️`))

module.exports = app;
