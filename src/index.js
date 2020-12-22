import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>367. Valid Perfect Square
</h1>
<div>
LKeetCode Problems</div>
`;
var isPerfectSquare = function (num) {
  return Number.isInteger(Math.sqrt(num));
};
isPerfectSquare(16);
