import {Router} from 'express'
import { createOrder, reciveWebhook } from '../controllers/payment.controller.js'

const router = Router()

router.post('/create-order', createOrder)

router.get('/success', (req, res) => {
    res.send('Success')
})
router.get('/failure', (req, res) => {
    res.send('failure')
})
router.get('/pending', (req, res) => {
    res.send('pending')
})

router.post('/webhook', reciveWebhook)


export default router