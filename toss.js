const cricketers = [
  {
    name: "Virat Kohli",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Jasprit Bumrah",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Rohit Sharma",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Yuzvendra Chahal",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Mohammed Shami",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Suryakumar Yadav",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Prasidh Krishna",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Hardik Pandya",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Shikhar Dhawan",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Arshdeep Singh",
    playingRole: "Bowler",
    credit: 6,
  },
  {
    name: "Dinesh Karthik",
    playingRole: "Wicketkeeper",
    credit: 11,
  },

  {
    name: "Ravindra Jadeja",
    playingRole: "Batsman",
    credit: 10,
  },

  {
    name: "Deepak Chahar",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Ruturaj Gaikwad",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Deepak Hooda",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Venkatesh Iyer",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Tom Curran",
    playingRole: "Bowler",
    credit: 7,
  },

  {
    name: "Rory Burns",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Ishan Kishan",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Shreyas Iyer",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Sam Billings",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Kuldeep Yadav",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Bhuvneshwar Kumar",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Mohammed Siraj",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Devdutt Padikkal",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Rishabh Pant",
    playingRole: "Wicketkeeper",
    credit: 10,
  },
  {
    name: "Moeen Ali",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "James Anderson",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Jonny Bairstow",
    playingRole: "Batsman",
    credit: 11,
  },

  {
    name: "Stuart Broad",
    playingRole: "Bowler",
    credit: 9,
  },

  {
    name: "Jos Buttler",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Zak Crawley",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Sam Curran",
    playingRole: "Bowler",
    credit: 8,
  },

  {
    name: "Chris Jordan",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Jack Leach",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Ravichandran Ashwin",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Liam Livingstone",
    playingRole: "Batsman",
    credit: 12,
  },
  {
    name: "Reece Topley",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "David Willey",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Joe Root",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ben Stokes",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Pat Cummins",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Aaron Finch",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Cameron Green",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Josh Hazlewood",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Travis Head",
    playingRole: "Wicketkeeper",
    credit: 8,
  },
  {
    name: "Usman Khawaja",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Marnus Labuschagne",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Nathan Lyon",
    playingRole: "Bowler",
    credit: 9,
  },
];

const shotTypes = [
  { name: "Single", point: 1, runs: 1 },
  { name: "Double", point: 2, runs: 2 },
  { name: "Triple", point: 3, runs: 3 },
  { name: "Boundary", point: 5, runs: 4 },
  { name: "Six", point: 8, runs: 6 },
  { name: "DotBall", point: 1, runs: 0 },
  { name: "Wicket", point: 10 },
];

let tossWinnersTeam = [];
let tossLosersTeam = [];

let teamDetails = [];

// let tossWinnerTeamInfo = {};
// let tossLoserTeamInfo = {};

getById("team1Selection").hidden = true;
getById("team2Selection").hidden = true;
getById("captainSelection").hidden = true;
getById("cricketTime").hidden = true;
getById("result").style.display = "none";

class Team {
  constructor(name) {
    this.name = name;
    this.isTossWinner = false;
    this.fantasyPoints = 0;
  }
}

function getTossWinner() {
  let team1Name = document.getElementById("team1Name").value;
  let team2Name = document.getElementById("team2Name").value;

  if (team1Name != "" && team2Name != "") {
    let toss = Math.floor(Math.random() * 2);
    return toss == 0 ? team1Name : team2Name;
  }
  return false;
}

function printTossWinner() {
  let tossWinnersName = getTossWinner();

  if (!tossWinnersName) {
    alert("Please enter team names first.");
  } else {
    document.getElementById("tossWinner").innerHTML = `${tossWinnersName} is winner of toss.`;
    document.getElementById("tossButn").disabled = true;
    saveTeamName(tossWinnersName);
  }
}

function saveTeamName(tossWinnersName) {
  let team1Name = document.getElementById("team1Name").value;
  let team2Name = document.getElementById("team2Name").value;

  teamDetails.push(new Team(team1Name), new Team(team2Name));

  for (let i = 0; i < teamDetails.length; i++) {
    if (teamDetails[i].name == tossWinnersName) {
      teamDetails[i].isTossWinner = true;
    }
  }
}

function displayPlayerCount(count, position) {
  let teamsCountValue = position.textContent;
  position.textContent = +teamsCountValue + count;
}

function displayCredit(cred, position) {
  let teamsCreditValue = position.textContent;
  position.textContent = +teamsCreditValue + cred;
}

// function removePlayerFromOptions(sel, selected, arr, creditPos, countPos) {
//   if (arr.length > 0) {
//     let select = selected;
//     let selectedValue = select.options[select.selectedIndex].value;
//     select.options[select.selectedIndex].remove();
//     for (let i = 0; i < cricketers.length; i++) {
//       if (cricketers[i].name == selectedValue) {
//         let selected = sel;
//         const tr = `<option value = '${cricketers[i].name}'> ${cricketers[i].name} (${cricketers[i].playingRole}) credit (${cricketers[i].credit})</option>`;
//         selected.insertAdjacentHTML("afterbegin", tr);
//         break;
//       }
//     }
//     let credit;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].name == selectedValue) {
//         credit = -arr[i].credit;
//         arr.splice(i, 1);
//       }
//     }
//     displayCredit(credit, creditPos);
//     displayPlayerCount(-1, countPos);
//   }
// }

// function saveTeamDetails(e, arr) {
//   for (let i = 0; i < teamDetails.length; i++) {
//     if (teamDetails[i].isTossWinner && e == 1) {
//       teamDetails[i].teamMembers = arr;
//     } else if (!teamDetails[i].isTossWinner && e == -1) {
//       teamDetails[i].teamMembers = arr;
//     }
//   }
// }

function getTossWinnerAndLosersIndex() {
  let obj = {};

  if (teamDetails[0].isTossWinner) {
    obj.tossWinnerIndex = 0;
    obj.tossLoserIndex = 1;
  } else {
    obj.tossWinnerIndex = 1;
    obj.tossLoserIndex = 0;
  }
  return obj;
}

function getById(id) {
  return document.getElementById(id);
}
