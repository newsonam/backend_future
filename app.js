const express=require('express');
const app=express();
const cors = require("cors");
app.use(cors());
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(require('./router/cardroutes'));

// Define the /ping endpoint to check the server running
app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});