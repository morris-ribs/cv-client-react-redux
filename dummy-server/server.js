import express from 'express';
import cors from 'cors';
import dummydata from './data/dummy';

let app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.status(200).contentType('application/json').send(dummydata["johndoe"]);
});

app.get('/:id', function(req, res) {
    const dataToSend = (dummydata[req.params.id] || dummydata["johndoe"]);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).contentType('application/json').send(dataToSend);
 });

// start server, listening at port 4000
app.listen(4000, () => console.log('Listening on port 4000'));

