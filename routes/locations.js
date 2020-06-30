var express = require('express');
var router = express.Router();

// // Location 1
// let obj = {};
// obj.name = "Hyderabad Jubilee Hills Center"
// obj.latitude = 17.468069;
// obj.longitude  = 78.543648;
// let jsonString = JSON.stringify(obj);

const locationData = [{id: 1,name: 'Hyderabad Jubilee Hills Center',latitude: 17.468069, longitude: 78.543648}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(locationData);
});

module.exports = router;
