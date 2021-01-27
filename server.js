//modules
const express = require('express');
const app = express();



app.use(express.static("view")) //this line allows it to use every other file needed to render html file properly

app.listen(3000);
app.get('/', (req, res) =>{
    res.sendFile('./view/index.html', {root: __dirname})
})

