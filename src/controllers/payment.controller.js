import mercadopago from "mercadopago";
import { MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY
      ,
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Laptop",
        unit_price: 500,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    notification_url: "http://localhost:3000/webhook",
  });
  console.log(result);

  res.send("Creating order");
};

export const reciveWebhook = async(req, res) => {
  console.log(req.query);

  const payment = req.query
  try {
      if(payment.type === 'payment'){
      const data = await mercadopago.payment.findById(payment('data.id'))
      console.log(data);
      }
    
      res.sendStatus(204);
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message});
  } 
};
