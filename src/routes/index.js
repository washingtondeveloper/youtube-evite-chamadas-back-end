import express from 'express'

import drinksController from '../controllers/DrinksController'

const router = express.Router()

router.get('/drinks', drinksController.index)
router.get('/drinks/:id', drinksController.getDrink)


export default router