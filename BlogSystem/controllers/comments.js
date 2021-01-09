const Comment=require('../models/Comments.js')

exports.comment=(req,res)=>
{
    console.log("reqbody",req.body);
    console.log("params",req.profile)
   //req.body.comment.user=req.profile._id
   req.body.UserId=req.profile._id
    const comment=new Comment(req.body)
    console.log(comment)
    comment.save((err,data)=>
	{
		if(err)
		{
			return res.status(400).json({
				error:"comment not created"
			})
		}
		res.json(data)
	})

    
};
