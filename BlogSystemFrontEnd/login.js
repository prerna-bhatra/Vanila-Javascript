document.getElementById('signClick').addEventListener('click',(event)=>{
    event.stopPropagation();
    event.preventDefault();
    console.log('SUCEEED');
    document.getElementById('Login').style.display='block'
    document.getElementById('SignUp').style.display='none'
})

document.getElementById('loginClick').addEventListener('click',(event)=>{
    event.stopPropagation();
    event.preventDefault();
    console.log('SUCEEED');
    document.getElementById('Login').style.display='none'
    document.getElementById('SignUp').style.display='block'
})

document.getElementById('signupsubmit').addEventListener('click',(event)=>{
    signupsubmit()
})


function signupsubmit()
{
    event.stopPropagation();
    event.preventDefault();
    var username=document.getElementById('name').value;
    var useremail=document.getElementById('email').value;
    var userpassword=document.getElementById('password').value;
    console.log(username,useremail,userpassword)
    const data = { name:username,email:useremail,password:userpassword };
        fetch('http://localhost:5000/api/signup', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}