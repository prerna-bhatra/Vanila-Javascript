//ShowComments()
//show signup
'use strict';
console.log('Hello');
// document.getElementById('Login').style.display = 'none';
function showsignup()
{
    var SignUp=document.getElementById('SignUp')
    var Login=document.getElementById('Login')
    
    SignUp.style.display='block';
    Login.style.display='none';
}

function showLogin()
{
    console.log("loginshow");
    var SignUp = document.getElementById('SignUp')
    var Login = document.getElementById('Login')
    
    SignUp.style.display='none';
    Login.style.display='block';   
    debugger;
}

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
  
  document.getElementById('PublishBtn').addEventListener('click',
  function PublishComment()
  {
     // alert('comment')
    console.log(pos,RangeOfText)
    
    //save comment in database



  })

 // PublishComment
}

//Post Comment


















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


