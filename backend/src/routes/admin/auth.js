const express = require('express');
const { signup, signin, signout } = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../Validators/auth');
const { requireSignin } = require('../../common-middleware');
const router = express.Router();


router.post('/admin/signup', signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/admin/signout', signout)


module.exports = router;