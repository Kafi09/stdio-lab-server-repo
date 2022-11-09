const express = require('express');
const cors = require('cors');
const { MongoClient} = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.twtll.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });






app.get('/', (req, res) => {
    res.send(' server is running')
})

app.listen(port, () => {
    console.log(` server running port is: ${port}`);
})