const express = require("express")
const app = express();
const router = express.Router()

const {home,follower,allData} = require('../Controller/searchController.js')
// const {follower} = require('../Controller/searchController.js')

router.route('/home').get(home)
router.route('/allData').get(allData)
router.route('/follower').get(follower)

module.exports = router