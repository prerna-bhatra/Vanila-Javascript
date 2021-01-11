//ShowComments()
//show signup
ReadComments()
'use strict';
// document.getElementById('Login').style.display = 'none';
const selectableTextArea = document.querySelectorAll(".selectable-text-area");
const twitterShareBtn = document.querySelector("#twitter-share-btn");

selectableTextArea.forEach(elem => {
elem.addEventListener("mouseup", selectableTextAreaMouseUp);
});

//document.addEventListener("mousedown", documentMouseDown);
function selectableTextAreaMouseUp(event) {
setTimeout(() => { // In order to avoid some weird behavior...
  const selectedText = window.getSelection().toString().trim();
  if(selectedText.length) { 
    const x = event.pageX;
    const y = event.pageY;
    const twitterShareBtnWidth = Number(getComputedStyle(twitterShareBtn).width.slice(0,-2));
    const twitterShareBtnHeight = Number(getComputedStyle(twitterShareBtn).height.slice(0,-2));
    if(document.activeElement !== twitterShareBtn) {
      twitterShareBtn.style.left = `${x - twitterShareBtnWidth*0.5}px`;
      twitterShareBtn.style.top = `${y - twitterShareBtnHeight*1.25}px`;
      twitterShareBtn.style.display = "block";
      twitterShareBtn.classList.add("btnEntrance");
    }
    else {
      twitterShareBtn.style.left = `${x-twitterShareBtnWidth*0.5}px`;
      twitterShareBtn.style.top = `${y-twitterShareBtnHeight*0.5}px`;
    }
  }    
}, 0);
}

//show this div when click on comment buttons
function Togglediv()
{
  //	alert(selectedText) 
  console.log("toggle")
 var x = document.getElementById("CommentBoxArea");
 console.log(x.style)
 console.log(x.style.display)
 if (x.style.display !== "block") {
    x.style.display = "block";
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  } else {
    x.style.display = "none";
  }

  const selectedText = document.getSelection().toString().trim();
  var selectedTextData=document.getElementById('SelectedText');
  selectedTextData.innerHTML=selectedText;

  let pos= document.getSelection().getRangeAt(0).getBoundingClientRect()
  let RangeOfText=document.getSelection().getRangeAt(0)
  
  //publish comment and save into database
  document.getElementById('PublishBtn').addEventListener('click',
  function PublishComment()
  {
     // alert('comment') 
    console.log(pos,RangeOfText)
    var x = document.getElementById("CommentBoxArea");
    x.style.display = "none";
    var userData = localStorage.getItem("user");
    console.log(userData)
    console.log(typeof(userData))
    var userDataObj=JSON.parse(userData)
    console.log(userDataObj)
    console.log(userDataObj.user._id)
    var comment=document.getElementById("Comment").value;
    console.log(comment)
    const UserId=userDataObj.user._id
    
    
    const data={CommentName:comment,UserName:userDataObj.user.name,HighlightTextYcordinator:pos.y,HighlightTextRangeStartOffest:RangeOfText.startOffset, HighlightTextRangeEndOffest:RangeOfText.endOffset}
    console.log(data)
  fetch(`http://localhost:5000/api/comment/${UserId}`, {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
      console.log('Success:',  JSON.stringify(data));
      alert("comment added")
      })
      .catch((error) => {
      console.error('Error:', error);
      });
  })
 // PublishComment
}

//read comments
function ReadComments()
{
  var CommentsArray=[]
  fetch("http://localhost:5000/api/comments")
  .then(response => response.json())
  .then(
    json=>{
      console.log(json)
		CommentsArray=[...json]
		console.log("copy array")
		console.log(typeof(json))
    console.log(CommentsArray)
    CommentsArray.forEach((element,index) => {
        console.log(element)
        document.getElementById('CommentsList').innerHTML+='<li class="Comments">'+element.UserName+'</br>'+element.CommentName+'</li>';
        });

    // const com=document.getElementsByClassName('Comments')[0];
    // console.log(com)
    /*document.querySelectorAll('Comments').forEach(item => {
      item.addEventListener('click', 
      function ClickComment() {
        alert("hhj")
      })
    })
*/

console.log(CommentsArray.length)
for(let i=0;i<CommentsArray.length;i++)
{
  console.log(i)
  document.getElementsByClassName('Comments')[i].addEventListener('click',
  function ClickComment()
  {
   // alert(i)
    //alert(CommentsArray[i].HighlightTextYcordinator)
    const ele=document.getElementById("MainPara")
    const MainParaEleArray=document.getElementsByTagName("p")
    console.log(MainParaEleArray)
    const textNode = ele.childNodes[0];
    scrollTo(0,(CommentsArray[i].HighlightTextYcordinator))
    
    var MarkElement=document.getElementById('Mark')
    if(MarkElement==null)
    {
    const range = document.createRange()
    const mark = document.createElement('mark');
    mark.setAttribute("id","Mark")
   // mark.setAttribute("color","blue")
    range.setStart(textNode, CommentsArray[i].HighlightTextRangeStartOffest);
    range.setEnd(textNode, CommentsArray[i].HighlightTextRangeEndOffest);
    range.surroundContents(mark);
    }
    else{
      const MainParaEle=document.getElementsByTagName('mark')
      while(MainParaEle.length)
      {
        //range.selectNodeContents(mark)
     //window.getSelection().removeAllRanges();
        var parent = MainParaEle[ 0 ].parentNode;
       
        console.log(parent)
        while( MainParaEle[ 0 ].firstChild ) {
          parent.insertBefore(  MainParaEle[ 0 ].firstChild, MainParaEle[ 0 ] );
      }
       parent.removeChild( MainParaEle[ 0 ] );
      }
      MainParaEleArray[0].normalize();
      const range = document.createRange()
    const mark = document.createElement('mark');
    mark.setAttribute("id","Mark")
    range.setStart(textNode, CommentsArray[i].HighlightTextRangeStartOffest);
    range.setEnd(textNode, CommentsArray[i].HighlightTextRangeEndOffest);
    range.surroundContents(mark);
    }
    
    

  }
  )
}
    }
  )
  
}

function documentMouseDown(event) {
/* if(event.target.id!=="twitter-share-btn" && getComputedStyle(twitterShareBtn).display==="block") {
  twitterShareBtn.style.display = "none";
  twitterShareBtn.classList.remove("btnEntrance");
  window.getSelection().empty();
}
*/
var popup= document.getElementById("Div1")
/*var icons= document.getElementById("twitterShareBtn");
icons.remove();
*/
popup.remove();
}

function shareTwitter()
{
   const selectedText = document.getSelection().toString().trim();
   //	alert(selectedText)
 // documentMouseDown()
 console.log(selectedText)
 if (selectedText != "") {
  window.open('https://twitter.com/intent/tweet?text='+encodeURI(selectedText) + '&url=' + encodeURI(document.URL));
}
}

//signout
var signout=document.getElementById('SignOut');
console.log(signout)
document.getElementById('SignOut').addEventListener('click',
function SignOut()
{
    console.log("signout")
    fetch('http://localhost:5000/api/signout')
    .then(response=>
        {
            console.log(response)
            localStorage.removeItem("user");
            window.location.href='index.html'
        }

    )
})

