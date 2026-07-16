let marks = 81;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks.");
}
else if (marks >= 90) {
    console.log("A+");
}
else if (marks >= 80) {
    console.log("A");
}
else if (marks >= 70) {
    console.log("A-");
}
else if (marks >= 60) {
    console.log("B");
}
else {
    console.log("F");
}