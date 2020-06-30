var express = require('express');
var router = express.Router();

// Location 1
let obj = {};
obj.name = "Hyderabad Jubilee Hills Center"
obj.latitude = 17.468069;
obj.longitude  = 78.543648;
let jsonString = JSON.stringify(obj);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(jsonString);
});

module.exports = router;
