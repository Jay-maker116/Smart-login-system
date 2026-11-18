function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message"); 

    if(username === "Code With Peter" && password === "1960") {
        message.style.color ="#0ff32d";
        message.textContent ="Login Successful";
}
   else{
    message.style.color ="#e01111";
    message.textContent ="Invalid username or password";
   }
}