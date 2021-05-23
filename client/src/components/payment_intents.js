import Stripe from 'stripe';

const stripe = new Stripe(process.env.REACT_APP_SECRET_KEY);

const paymentIntent = async (req, res) => {
    if(req.method === "POST") {
        try{
            const { amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                current: "usd"
            });
            res.status(200).send(paymentIntent.client_secret);
        } catch(error){
            res.status(500).json({ status: 500, message: error.message});
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}

export default paymentIntent;