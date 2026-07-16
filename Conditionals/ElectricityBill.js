let unit = 80;
let bill = 0;


if (unit < 0) {
    console.log("Invalid unit.");
}
else if (unit <= 100) {
    bill = unit * 5;
}
else if (unit <=200){
    bill = 100 * 5 + (unit -100) * 7;
}

else{
    bill = 100 * 5 + 100 * 7 + (unit -200) * 10;
}
console.log("Electricity bill: " + bill);