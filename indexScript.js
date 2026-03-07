
 document.getElementById("submit").addEventListener("click", function(){
    const inputName = document.getElementById("username");
    const username = inputName.value.toLowerCase();

    const inputPassword = document.getElementById("password");
    const userPassword = inputPassword.value.toLowerCase();

    if(username == "admin" && userPassword == "admin123"){
        alert("login sucess");
        window.location.assign("./home.html");
    }else{
        alert("your password worng");
        return;
    }
 });

 