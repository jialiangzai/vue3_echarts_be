let express = require('express')
let router = express.Router()

let fourData = require('../mock/four.json')
router.get('/data',(req,res)=>{
  res.send({msg:'我是one',chartFour:fourData})
})
module.exports  = router