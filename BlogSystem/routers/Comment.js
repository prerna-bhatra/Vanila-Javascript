const express=require("express");
const router=express.Router();

const {
	userById
}=require('../controllers/User');
const {comment}=require('../controllers/comments');

router.post("/comment/:userId",comment)

router.param('userId',userById)
module.exports=router;