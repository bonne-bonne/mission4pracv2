const express = require("express");
const env = require("dotenv");

const quote = require("./quote");
const rating = require("./rating");


env.config();
const app = express();
app.use(express.json());

//========================= ENDPOINTS ==================================//

//API 3
app.post('/quote', (req, res) =>{
    const car_value = req.body.car_value;
    const risk_rating = req.body.risk_rating;
    const content = req.body

    console.log(content)

    res.send(quote(car_value,risk_rating))
})

//comment 

//API 2
app.post('/rating', (req, res) =>{
    const claim_history = req.body.claim_history;
    const rating_content = req.body

    console.log(rating_content)

    res.send(rating(claim_history))
})

//========================= PORT ==================================//
const PORT = process.env.PORT || 4002
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})


