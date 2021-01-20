import db from '../db'

class DrinksController {
    constructor(services) {
        this.services = services
    }

    index = (req, res) => {
        const { drinks } = this.services;
        return res.json({ drinks })
    }

    getDrink = (req, res) => {
        const drink = this.services.getById(req.params.id)
        return res.json(drink)
    }
}

export default new DrinksController(db);