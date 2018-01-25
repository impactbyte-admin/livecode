const express = require("express")
const router = express.Router()

const adminWorkers = require("../workers/admin")
const factoryWorkers = require("../workers/factory")

// WELCOME

router.get("/", (req, res) => {
  res.send({
    title: "PABRIK MAGIC",
    message: "Welcome to PT Pabrik Magic Indonesia"
  })
})

// PROCESS PAYMENT

router.get(
  "/pay",
  adminWorkers.receivePayment,
  adminWorkers.sendInvoice,
  (req, res) => {
    res.send(req.payload)
  }
)

// PROCESS ORDER

router.get(
  "/order",
  factoryWorkers.produce,
  factoryWorkers.mold,
  factoryWorkers.package,
  (req, res) => {
    res.send(req.payload)
  }
)

module.exports = router
