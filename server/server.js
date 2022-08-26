const express = require('express');
const cors = require('cors');
const userRoute = require('./route/userRoute');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json("Hello Express");
})
app.use('/',userRoute)
app.use('/api',userRoute)
app.listen(5000, () => { console.log("http://localhost:5000"); })