const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const CHESS_PIECE = [1, 1, 2, 2, 2, 8];
const result = CHESS_PIECE.map((value, index) => value - input[index]);

console.log(result.join(" "));
