ShowMyComments()

console.log("comments")
function ShowMyComments()
{
    var MyCommentsArray=[]
    var userData = localStorage.getItem("user");
    var userDataObj=JSON.parse(userData)
    var UserId=userDataObj.user._id;
    fetch(`http://localhost:5000/api/MyComments/${UserId}`)
    .then(response=>response.json())
    .then(json=>
        {
            console.log(json,typeof(json))
            MyCommentsArray=[...json]
            console.log(MyCommentsArray)
            MyCommentsArray.forEach((element,index) => {
                console.log(element)
         document.getElementById('MyCommentsList').innerHTML+='<li class="Comments">'+'</br>'+element.CommentName+'</li>';
                });
        })
}


