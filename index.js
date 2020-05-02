const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB'))

//Middlewares
app.use(express.json());
//Routes middlewares
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server is Up and running!'));
