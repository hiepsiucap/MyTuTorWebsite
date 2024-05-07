const express = require('express');
const router  = express.Router();
const {GetAllClass,CreatAClass,DeleteAClass} =require('../Controller/ClassController')
const {
    authentication,
    AuthorizePermission
} = require('../Middleware/authentication')


router.route('/').get(authentication,GetAllClass).post(authentication,CreatAClass)
router.route('/:id').delete(authentication,DeleteAClass)
module.exports= router;