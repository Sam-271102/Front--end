alert("Hello Samuel");
var userChoice = confirm("Are you sure, would like to delete the file");
console.log(userChoice);
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";
 if (userChoice == true) {
    alert(messageOut + yesMessage);
 }
 else {
    alert(messageOut + noMessage);
 }


