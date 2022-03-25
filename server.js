const express = require("express");


const app = express();

app.get("/", (reg, res) =>{
    res.send("Hello-Merhaba");
    res.sendFile('./views/index.html', {root:_dirname});
})

app.get('/users/:id', (reg, res) =>{
    res.status(200).send('<hi> Users ID: ${reg.params.id} </hi>')
})

const lessons = {
    (id:1, name:"Fizik")
    (id:2, name:"Kimya")
    (id:3, name:"Matematik")
}
       
app.get('/api/lessons' (res, reg) => {
    const lesson = {
        id: lessons.length +1,
        name: req.body.name
    }

    lessons.push(lesson);
})