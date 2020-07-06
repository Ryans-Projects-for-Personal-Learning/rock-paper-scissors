function changeRockState() {
  document.getElementById("rock").src = "images/rock_selected.png";
  document.getElementById("paper").src = "images/paper_unselected.png";
  document.getElementById("scissors").src = "images/scissors_unselected.png";

  compareResults("R");
}

function changePaperState() {
  document.getElementById("rock").src = "images/rock_unselected.png";
  document.getElementById("paper").src = "images/paper_selected.png";
  document.getElementById("scissors").src = "images/scissors_unselected.png";

  compareResults("P");
}

function changeScissorsState() {
  document.getElementById("rock").src = "images/rock_unselected.png";
  document.getElementById("paper").src = "images/paper_unselected.png";
  document.getElementById("scissors").src = "images/scissors_selected.png";

  compareResults("S");
}

function compareResults(playerOption) {
  var opponentOptions = [
    "R", "P", "S"
  ]

  var opponentOption = opponentOptions[Math.floor(Math.random() * opponentOptions.length)];
  console.log(opponentOption);
  console.log(playerOption);

  switch (opponentOption) {
    case "R":
      document.getElementById("question_circle").src = "images/rock_selected.png";
      break;
    case "P":
      document.getElementById("question_circle").src = "images/paper_selected.png";
      break;
    case "S":
      document.getElementById("question_circle").src = "images/scissors_selected.png";
      break;
  }

  switch (playerOption) {
    case "R":
      switch (opponentOption) {
        case "R":
          document.getElementById("result").innerText = "It is a tie";
          break;
        case "P":
          document.getElementById("result").innerText = "You lose";
          break;
        case "S":
          document.getElementById("result").innerText = "You win";
          break;
      }
      break;

    case "P":
        switch (opponentOption) {
          case "R":
            document.getElementById("result").innerText = "You win";
            break;
          case "P":
            document.getElementById("result").innerText = "It is a tie";
            break;
          case "S":
            document.getElementById("result").innerText = "You lose";
            break;
        }
        break;

    case "S":
        switch (opponentOption) {
          case "R":
            document.getElementById("result").innerText = "You lose";
            break;
          case "P":
            document.getElementById("result").innerText = "You win";
            break;
          case "S":
            document.getElementById("result").innerText = "It is a tie";
            break;
        }
        break;
  }

}