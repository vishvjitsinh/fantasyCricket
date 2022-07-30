function addOptionsForWinnerTeam(arrayOfObjects) {
  let sel = document.getElementById("t1Sel");
  document.getElementById("team1Selection").hidden = false;

  for (var i = 0; i < arrayOfObjects.length; i++) {
    var option = document.createElement("option");
    option.text = `${arrayOfObjects[i].name} (${arrayOfObjects[i].playingRole}) (Credit: ${arrayOfObjects[i].credit})`;
    option.value = arrayOfObjects[i].name;
    sel.add(option);
  }

  // printing winner's team name

  for (let i = 0; i < teamDetails.length; i++) {
    if (teamDetails[i].isTossWinner) {
      document.getElementById("winner").textContent = teamDetails[i].name;
    }
  }
}

function displayOption() {
  if (teamDetails.length == 0) {
    alert ("please toss first")
    // document.getElementById("butn2").disabled = true;
  } else {
    addOptionsForWinnerTeam(cricketers);
    document.getElementById("toss").remove();
  }
}

function displaySelectedPlayersForTossWinner() {
  // winner's team selection
  let credit;
  let sel = document.getElementById("t1Sel");

  let selectedValue = sel.options[sel.selectedIndex].value;

  for (let i = 0; i < cricketers.length; i++) {
    if (cricketers[i].name == selectedValue) {
      credit = cricketers[i].credit;

      tossWinnersTeam.push(cricketers[i]);

      if (validateTeamPlayers(tossWinnersTeam) == false) {
        tossWinnersTeam.pop();
        return;
      }

      sel.options[sel.selectedIndex].remove();

      let selected = document.getElementById("selected");

      const tr = `<option value = '${cricketers[i].name}'> ${cricketers[i].name} (${cricketers[i].playingRole}) credit (${cricketers[i].credit})</option>`;

      selected.insertAdjacentHTML("afterbegin", tr);
      break;
    }
  }
  displayCredit(credit, document.getElementById("playerCredit"));
  displayPlayerCount(1, document.getElementById("playerCount"));
}

function removeOptionsForTossWinner() {
  let select = document.getElementById("t1Sel");
  let selected = document.getElementById("selected");
  let creditPrint = document.getElementById("playerCredit");
  let countPrint = document.getElementById("playerCount");

  removePlayerFromOptions(select, selected, tossWinnersTeam, creditPrint, countPrint);
}

function saveTossWinnersTeam(){
  saveTeamDetails(1,tossWinnersTeam);
}