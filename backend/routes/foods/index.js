const express = require("express")
const router = express.Router()

let foods = [
  {
    id: 0,
    name: "Bakso",
    price: 10000
  }, {
    id: 1,
    name: "Cilok",
    price: 5000
  }, {
    id: 2,
    name: "Soto",
    price: 15000
  }
]

// GET ITEM BY ID
const getItemById = (items, id) => {
  const item = items.filter(item => {
    return item.id === Number(id)
  })
  return item
}

// SAVE NEW ITEM
const saveNewItem = (items, data) => {
  items.push(data)
}

// DISPLAY FOODS
router.get("/", (req, res) => {
  res.send(foods)
})

// DISPLAY SINGLE FOOD
router.get("/:id", (req, res) => {
  res.send({
    message: `get single food`,
    food: getItemById(foods, req.params.id)
  })
})

// SAVE NEW FOOD
router.post("/", (req, res) => {
  const data = {
    id: foods.length,
    name: req.body.name,
    price: Number(req.body.price)
  }
  saveNewItem(foods, data)
  res.send(foods)
})

// DELETE ALL
router.delete("/", (req, res) => {
  foods.splice(0, foods.length)
  res.send(foods)
})

// DELETE ONE
router.delete("/:id", (req, res) => {
  const currentFoods = foods.filter(food => {
    return food.id !== Number(req.params.id)
  })
  foods = currentFoods
  res.send({message: `food deleted`, currentFoods: foods})
})

// UPDATE ONE
router.put(`/:id`, (req, res) => {
  const itemId = Number(req.params.id)
  const name = Number(req.body.name)
  const price = Number(req.body.price)

  // Find data index
  const itemIndex = foods.findIndex((item, index) => {
    return item.id === itemId
  })

  // Modify matched data
  foods[itemIndex]["name"] = name
  foods[itemIndex]["price"] = price

  // Prepare response
  const response = {
    message: `updated a food through id`,
    itemId: itemId,
    itemBody: itemBody,
    itemIndex: itemIndex,
    foods: foods
  }

  // Send response
  res.send(response)
})

module.exports = router;
