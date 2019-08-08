const fs = require("fs");

var express = require('express');
var bcutils = require('./blockchainutils')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let addressesarr = [];

router.get('/wallets/:ha/:ho', async function (req, res, next) {
  let objarr = await JSON.parse(fs.readFileSync('./hi/store.addresses').toString());
//console.log(objarr)
  addressesarr = [];
  let x=0
  for (var key in objarr) {
    if(x>req.params.ha && x<req.params.ho){
      objarr[key].amount = await bcutils.USDTBalance(objarr[key])
      addressesarr.push(objarr[key]);
    }
    x++
  }

  console.log("addresses now:" + addressesarr.length)
  res.render('basic-table',{data:objarr})
});



module.exports = router;
