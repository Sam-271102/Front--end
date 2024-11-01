alert("Hey User");
var joinList = confirm("Would you like to join our mailing list?");
        
if (joinList) {
    
    var email = prompt("Please enter your email address:", "me@example.com");
    
    if (email === null) {
    
        alert("Thank you, we will not bother you again.");
    } else if (email === "" || email === "me@example.com") {

        alert("Thank you, but your email was not valid.");
    } else {

        alert("Thank you, our next newsletter will be sent to " + email + ".");
    }
} else {

    alert("Thank you, we will not bother you again.");
}