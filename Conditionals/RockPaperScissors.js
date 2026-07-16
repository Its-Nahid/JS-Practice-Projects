let player1 = "rock";
let player2 = "paper";

if (player1 === player2) {
    console.log("Draw");
}
else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 Wins");
}
else {
    console.log("Player 2 Wins");
}