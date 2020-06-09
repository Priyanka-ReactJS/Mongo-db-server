const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./DB/Conncection');
const app = express();
const cors = require('cors')


connectDB();

app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
const Port = process.env.Port || 3000;
app.use(cors())

app.use(bodyParser.json())
app.listen(Port, () => console.log('Server started'));