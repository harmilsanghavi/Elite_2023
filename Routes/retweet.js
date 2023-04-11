const express = require("express")
const app = express();
const router = express.Router()

const { re,reC,show,delete1 } = require('../Controller/retweetcontroller')

router.route('/re').get(re)
router.route('/reC').get(reC)
router.route('/show').get(show)
router.route('/delete').get(delete1)

module.exports = router
module.exports = router