let express = require('express')
let router = express.Router()

let twoData = require('../mock/two.json')
router.get('/data', (req, res) => {
  res.send({ msg: '我是one', chartTwo: twoData })
})
module.exports = router