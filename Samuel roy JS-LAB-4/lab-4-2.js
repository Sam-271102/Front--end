function calculateAverage(num1, num2, num3, num4, num5) {
    var average = (num1 + num2 + num3 + num4 + num5) / 5;
    return parseFloat(average.toFixed(1));
}

console.log(calculateAverage(5, 10, 15, 20, 25));

var grade1 = 80;
var grade2 = 75;
var grade3 = 85;
var grade4 = 70;
var grade5 = 65;

var averageGrade = calculateAverage(grade1, grade2, grade3, grade4, grade5);

if (averageGrade >= 70) {
    alert("Success! Your average is " + averageGrade + ".");
} else {
    alert("Review required. Your average is " + averageGrade + ".");
}

