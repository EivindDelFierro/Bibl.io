const path = require('path')
const express = require('express')
const doiController = require(path.resolve(__dirname, '../controllers/doicontroller'))

const router = express.Router();

router.get('/', doiController.bibtex, (req, res, next) => {
  console.log("terminal doi route get")
  return res.status(200).json(res.locals.bibtex);
})

module.exports = router;