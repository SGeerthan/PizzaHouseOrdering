const express = require('express');
const router = express.Router();
const { addPizza , getPizzas,deletePizzas } = require('../controller/Pizza');

router.post('/pizzas', addPizza);
router.get('/getPizzas',getPizzas)
router.delete('/deletePizza',deletePizzas)

module.exports = router;
