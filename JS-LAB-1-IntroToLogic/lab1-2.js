var item1 = 9.99; 
var item2 = 14.50; 
var item3 = 7.85; 
var subTotal; 
var discountValu = 5; 
var subAfterDiscount;  
var taxHST = 1.13; 
var totalAfterTax; 
var numOfDiners = 2;
var eachPays;
var billMessage = "You each owe $"; 

subTotal = item1 + item2 + item3;


subAfterDiscount = subTotal - discountValu;


totalAfterTax = subAfterDiscount * taxHST;


eachPays = totalAfterTax / numOfDiners;


alert(billMessage + eachPays);



