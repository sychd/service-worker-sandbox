const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        message: 'works!'
    });
});

app.use('/api', router);
app.use('/static', express.static(path.join(__dirname, 'public')));
app.listen(port);
console.log('Server on port ' + port);