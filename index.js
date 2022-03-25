const express = require("express")

app = express()

app.use(auth)


app.use((req, res) => {
    console.log("middleware")
    res.send("middleware")
})

//CORS
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) =>{
    res.send("CORS samples")
})


app.use ((req, res, next) => {
    logger('${req.method}\t{req.url', 'log.txt')
    next()
})
// her zaman uğramasın sadece lazım olduğunda gelsin??


app.get('/', (req, res) => {
    res.send("page is rendering")
})

app.get('/users', (req, res) => {
    res.send("users page is rendering")
})

app.listen(3000), () => console.log("Running...")