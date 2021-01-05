	ShowComments()

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
  

function showdiv()
{

	 const selectedText = window.getSelection().toString().trim();
 	//	alert(selectedText)
   // documentMouseDown()
 	var highlight= document.createElement('div');
  document.body.appendChild(highlight);
	highlight.setAttribute("id", "Div1");
   var btn=document.createElement('BUTTON');
  console.log(btn)
   document.getElementById('Div1').appendChild(btn)
  btn.setAttribute("id","scrollbtn");
   document.getElementById("scrollbtn").innerHTML =selectedText;
   document.getElementById("scrollbtn").value =selectedText;
   document.getElementById("scrollbtn").style.border ='1px solid black'
   var input =document.createElement('INPUT');
   console.log(input)
     document.getElementById('Div1').appendChild(input)
      var publishbtn=document.createElement('BUTTON');
  console.log(publishbtn)
   document.getElementById('Div1').appendChild(publishbtn)
  publishbtn.setAttribute("id","commentbtn");
    document.getElementById("commentbtn").innerHTML ="publish";
     input.setAttribute("placeholder","what's your thoughts")
      input.setAttribute("id","commentinput")
  document.getElementById("Div1").style.border ='1px solid black'
    document.getElementById("Div1").style.background ='#ffffff'
    document.getElementById("Div1").style.width='500px';
     document.getElementById("Div1").style.height='624px';
       document.getElementById("Div1").style.position='absolute';
       document.getElementById("Div1").style.right=0;
        document.getElementById("Div1").style.top=0;
       document.getElementById("Div1").style.padding='20px 20px 20px 20px';
        var pos= window.getSelection().getRangeAt(0).getBoundingClientRect()
        console.log(pos)
        document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  

 //  documentMouseDown()  
 //document.addEventListener("mousedown", documentMouseDown);



 document.getElementById("commentbtn").addEventListener("click",function()
 {
   publish(pos)
 });
}

function publish(cordinators)
{
 // alert("gdd")
 var inputval=document.getElementById("commentinput").value;
// alert(inputval)
  console.log("inputval on publish"+inputval)

  if(localStorage.getItem('comments'))
  {

    const comments1= JSON.parse(localStorage.getItem('comments'))
    console.log(comments1)
    //var commentsarray=Object.values(comments1)
    console.log(typeof(comments1))
    comments1.push({"comments":inputval,"poss":cordinators.y})
      localStorage.setItem("comments", JSON.stringify(comments1));
    console.log(comments1)
  }
else{
  const comments=[]
   comments.push({"comments":inputval,"poss":cordinators.y})
   localStorage.setItem("comments", JSON.stringify(comments));
   console.log(comments)
}  
}

function scroll(param)
{
 console.log(param)
 window.scrollTo(0, param);
//window.scrollTo(0, pos.y);
}

function ShowComments()
{
  if(localStorage.getItem('comments'))
  {
    const comments1= JSON.parse(localStorage.getItem('comments'))  
    //document.getElementById('CommentBody').innerHTML=JSON.stringify(comments1)
    const CommentArray=comments1.map(MyFunction)
    function MyFunction(num) {
       return num ;
    }
      console.log(CommentArray)

      const CommentPossiitons=[]
      for(let i=0;i<CommentArray.length;i++)
      {
          var CommentDiv=document.createElement('div')
          document.getElementById('CommentBody').appendChild(CommentDiv)
          var CommentInput=document.createElement('INPUT')
          CommentDiv.setAttribute("class","Comment")
          document.getElementById('CommentBody').appendChild(CommentInput)
           CommentInput.setAttribute("class","CommentInputId")
            CommentInput.setAttribute("placeholder",CommentArray[i].poss)
             CommentInput.setAttribute("type","number")
           document.getElementsByClassName("CommentInputId")[i].value=CommentArray[i].poss
            document.getElementsByClassName("CommentInputId")[i].style.display='none'
            const val=parseInt(document.getElementsByClassName("CommentInputId")[i].value)
       // console.log((document.getElementsByClassName("CommentInputId")[i].value))
        CommentPossiitons.push(val)
          console.log(CommentPossiitons[i])
          document.getElementsByClassName("Comment")[i].innerHTML=CommentArray[i].comments
          document.getElementsByClassName("Comment")[i].addEventListener("click",function() {
            console.log(i)
            scroll(CommentPossiitons[i])
          })

      }
           console.log(CommentPossiitons)
  }
  else
  {
    document.getElementById('CommentBody').innerHTML="no comments so far"
  }
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



