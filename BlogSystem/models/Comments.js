const mongoose=require("mongoose");

const CommentsSchema=new mongoose.Schema({
	UserId:
	{
		type:Object,
		require:true
    },
    CommentName:
    {
        type:String,
        required:true
    }
},
{
	timestamps:true
}
);

module.exports=mongoose.model("Comments",CommentsSchema);