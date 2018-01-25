const admin = {
  receivePayment: (req, res, next) => {
    req.payload = Object.assign(
      {},
      {
        amount: Number(req.query.amount) || Number(req.body.amount)
      }
    )
    next()
  },
  sendInvoice: (req, res, next) => {
    req.payload = Object.assign(req.payload, {
      title: "Payment Invoice",
      paid: true
    })
    next()
  }
}

module.exports = admin
