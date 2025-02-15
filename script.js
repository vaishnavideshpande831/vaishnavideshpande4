//register User
document.getElementById("registerForm").addEventListener("submit",function(event){
    event.preventDefault();

    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if(username == "" || password == ""){
        alert("Fill in All the fileds");
        return;
}

let users =JSON.parse(localStorage.getItem("users")) || [];
let userExists = users.some(user => user.username === username);
if(userExists){
    alert("Usernmae already taken!")
    return;
}
users.push({username,password});
localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful !you can login now");
document.getElementById("registerForm").requestFullscreen();

})
//Login user

document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    let users =JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.username === username && user.password === password);
    if(validUser){
        message.style.color = "green";
        message.textContent = "Login Successfull";
    }else{
        message.style.color = "red";
        message.textContent = "Invalid Username or Password";
    }

    document.getElementById("loginForm").reset();
})