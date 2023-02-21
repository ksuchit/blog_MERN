const express = require('express')
const app = express();
const authRoutes = require('./routes/authRoutes')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config();

app.use(express.json())
app.use('/blog-api',authRoutes)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello")
})
// connect db
try {
    
    mongoose.connect(
        process.env.DB_CONNECT,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"),
    )
} catch (error) {
    console.log("could not connect to db")
}

// mongoose 
//  .connect(process.env.DB_CONNECT, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,   })   
//  .then(() => console.log("Database connected!"))
//  .catch(err => console.log(err));

//run on port
app.listen(8080, () => {
    console.log('server is up and running on port 8080!')
})