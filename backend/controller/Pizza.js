const Pizza = require('../model/Pizza');

exports.addPizza = async (req, res) => {
  try {
    const { name, description, prices, imageUrl } = req.body;
    if (!name || !description || !prices.small || !prices.medium || !prices.large || !imageUrl) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newPizza = new Pizza({
      name,
      description,
      prices,
      imageUrl,
    });

    await newPizza.save();
    res.status(201).json({ message: 'Pizza added successfully', pizza: newPizza });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();

    if (!pizzas || pizzas.length === 0) {
      return res.status(404).json({ error: 'No pizzas found' });
    }

    res.status(200).json({ pizzas });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.deletePizzas = async (req, res) => {
  try {
  
    const pizzaId = req.params.id;
    const pizza = await Pizza.findByIdAndDelete(pizzaId);
    if (!pizza) {
      return res.status(404).json({ error: 'Pizza not found' });
    }
    res.status(200).json({ message: 'Pizza deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};


