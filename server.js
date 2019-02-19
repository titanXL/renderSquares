const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/status', (req, res) => {
    const result = []
    for(let i = 0; i< 50;i++) {
        const pod = {}
        pod.color = Math.floor(Math.random() * 2) > 0 ? 'yellow' : 'green'
        result.push(pod)
    }
    res.json(result)
})

app.get('/status/:id', (req, res) => {
    const pod = {}
    pod.color = Math.floor(Math.random() * 2) > 0 ? 'yellow' : 'green'
    pod.id = req.params.id
    res.json(pod)
})


app.listen(3000, () => {
    console.log('App listening on port 3000')
})