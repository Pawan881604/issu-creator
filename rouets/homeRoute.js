const express = require('express');
const router = express.Router();
const { home,createIssu, updateIssue, UpdateIssuData, deleteIssu } = require("../controller/homeController");
// this is home route here is get and post routs
router.route('/').get(home)
router.route('/api/create/issus').post(createIssu)
router.route('/update/:id').get(updateIssue)
router.route('/update/api/update/issus').post(UpdateIssuData)
router.route('/delete/:id').get(deleteIssu)

module.exports = router;