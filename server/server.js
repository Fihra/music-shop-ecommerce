const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.SECRET_KEY);
const { v4: uuid4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send("It Works ");
})

app.post("/payment", (req, res) => {
    const { myCart, token } = req.body.body;
    // console.log("Product: ", product);
    // console.log("Price: ", product.price);
    const idempontencyKey = uuid4();
    console.log(myCart);

    let total = 0;

    myCart.forEach(item => {
        return total += item.price 
    })
    
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: total * 100,
            currency: "usd",
            customer: customer.id,
            recepient_email: token.email,
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

//listen

app.listen(3001, () => console.log("Listening on port 3001"));