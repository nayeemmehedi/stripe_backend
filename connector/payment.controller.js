const { tokenCreate } = require("../utils/token");

const stripe = require("stripe")(process.env.STRIPE_SECRATE);

module.exports.paymentControll = async (req, res, next) => {

    const {value,token} = req.body
    console.log(value, token)
    
  
   return stripe.customers.create({
        email: token.email,
        name: value.name,
       
      })
      .then((customer) => {
        return stripe.charges.create({
          amount: value.amount, // Charging Rs 25
          description: value.price,
          currency: "INR",
          quality : value.quality
        //   customer: customer.id,
        });
      })
      .then((charge) => {
        console.log("charge",charge)
        res.send({
          success: true,
          message: "Payment Successfull",
          charge: charge
        }); // If no error occurs
      })
      .catch((err) => {
        res.send(err); // If some error occurs
      })

    }
