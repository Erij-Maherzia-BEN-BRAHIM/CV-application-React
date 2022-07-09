const express = require("express");
const cvRoutes = require('./routes/cv');
const authRoutes = require('./routes/auth');
const dotenv = require("dotenv");
const morgan = require('morgan')
require("./database/connect");
const authenticate=require("./middelware/is-auth")
const app = express();

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

app.use(express.json()); //application/json

app.use((req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(morgan("dev"))



app.use('/auth', authRoutes);
app.use('/cv', cvRoutes);
app.use('/isAuth', authenticate, (req, res)=>{
    
})
app.use((error, req, res, next) => {
    console.log("-----", error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data }); //data c'est pour la validation
});


app.listen(port, () => {
        console.log("server is listening ");
      });


