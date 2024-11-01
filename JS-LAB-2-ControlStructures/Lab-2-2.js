alert("Hey User")
var storedUsername = "dart";
var storedPassword = "vader";



var username = prompt("Please enter your username:");
console.log("Username provided:", username);


var password = prompt("Please enter your password:");
console.log("Password provided:", password);


if (username === storedUsername && password === storedPassword) {
    
    alert("Welcome back, " + username);
    console.log("Login successful");
} else {
    alert("Invalid username/password");
    console.log("Login fail");
}





