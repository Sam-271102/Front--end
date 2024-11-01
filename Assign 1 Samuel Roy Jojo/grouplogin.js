var teamnum = '4';
var mem1 = "Samuel";
var mem2 = "John";
var mem3 = "Mathew";
var mem4 = "Thomas";
var fname;
var grp;

var grp = prompt("Which group do you belong from?");
/*if(grp !== teamnum){
    alert("Access Denied");
    if(grp === teamnum)
        prompt("Enter First Name");
    
}*/
if(grp === teamnum){
    var fname = prompt("Enter First Name");
    //if(grp !== teamnum)
    //if(fname === an || fname === bh || fname === ha || fname === ne)
    if(fname === mem1)
        alert("Welcome to group 4 Samuel Roy");
    else if(fname === mem2)
        alert("Welcome to group 4 John Albert");
    else if(fname === mem3)
        alert("Welcome to group 4 Mathew Das");
    else if(fname === mem4)
        alert("Welcome to the group 4 Thomas Will");
    else{
        alert("Access Denied!");
    }
    }
     
    else {  alert("Access Denied!");
      }
    