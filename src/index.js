let x = Math.floor(Math.random() * 10);

function game() {
  while (true) {
    let n = +prompt("Guess the numbers from 1 to 10 or input ! for exit:");
    if (n === "!") {
      alert("Bye!");
      break;
    } else if (isNaN(n)) {
      alert("Error!");
    } else if (n == x) {
      alert("You win!");
      break;
    } else if (n > x) {
      alert("Too much(");
      continue;
    } else if (n > 10 || n < 1) {
      alert("Please enter a number between 1 and 10!");
      continue;
    } else {
      alert("Too little(");
      continue;
    }
  }
}

export default game;
