var express = require('express');
var router = express.Router();

const users = [
  {id: 0, name: "M Haidar Hanif"},
  {id: 1, name: "Albert Fajar Yuga Yusdi Putra"},
  {id: 2, name: "Muhammad Haekal"},
  {id: 3, name: "Aditia Darmadi Jiwandono"},
  {id: 4, name: "Nina Kartina"},
  {id: 5, name: "Muhammad Haidar Dzaky"},
  {id: 6, name: "Angeline Go"},
  {id: 7, name: "Muhammad Fahri Abdul Hakim"},
  {id: 8, name: "Fikri Muhammad"},
  {id: 9, name: "Miftahul Agtamas Fidyawan"},
  {id: 10, name: "Oliver Audhie"},
  {id: 11, name: "Ferryal Muhamad Fajar Bahari"}
]

router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
