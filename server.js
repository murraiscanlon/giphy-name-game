const express = require("express")
const axios = require("axios")
const app = express()
const port = process.env.PORT || 3000
const API_KEY = 'q7GtPLWMSA5t8S48wDG2iXKrrDqBzGci'; //process.env.API_KEY;
app.use(express.static(__dirname + '/public'));

// let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}`);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/giphySearch/:searchTerm" , (req, res) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${req.params.searchTerm}`
    axios.get(url).then( (response) => {
        console.log("response", response.data)
        res.json(response.data)
    })
    // console.log(req.params.searchTerm)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})