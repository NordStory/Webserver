let express = require("express");
let app = express();

app.listen(5454);

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

app.use(express.static('./public'));

let counter = 0;

app.get('/api/counter', (req, res) => {
    counter++;
    res.send({ counter });
});