const express = require('express');
const {updateUser, getUser} = require('../controllers/user');

const router = express.Router();

router.route('/').patch(updateUser).get(getUser);

module.exports = router;