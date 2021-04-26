const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const cData = await Category.findByPk(req.params.id, {
      include: [{ Product }]
    });

    if (!cData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(cData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const upData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!upData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(upData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!delData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(delData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
