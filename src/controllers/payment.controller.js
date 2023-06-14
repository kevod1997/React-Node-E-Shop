import mercadopago from 'mercadopago'



export const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token: "TEST-8109041613978043-061322-7b5d0b9987e2f1a4926d1a9f984699e1-1398251849"
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Laptop",
                unit_price: 500,
                currency_id: "ARS",
                quantity: 1,
            }
        ]
    })

  res.send("Creating order");
};
