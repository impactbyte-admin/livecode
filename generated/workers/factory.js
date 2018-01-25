const factory = {
  produce: (req, res, next) => {
    req.payload = Object.assign(
      {},
      {
        material: req.query.material,
        quality: Number(req.query.quality) || 0,
        quantity: Number(req.query.quantity) || 0
      }
    )
    next()
  },
  mold: (req, res, next) => {
    Object.assign(req.payload, {
      molded: true
    })
    next()
  },
  package: (req, res, next) => {
    Object.assign(req.payload, {
      packaged: true,
      title: "Ordered Goods"
    })
    next()
  }
}

module.exports = factory
