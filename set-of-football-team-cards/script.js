const footballTeam = {
  team: "Argentina",
  year: 2026,
  headCoach: "Lionel Scaloni",
  players: [
    { name: "Lionel Messi", position: "forward", isCaptain: true },
    { name: "Lautaro Martinez", position: "forward", isCaptain: false },
    { name: "Julian Alvarez", position: "forward", isCaptain: false },
    { name: "Rodrigo De Paul", position: "midfielder", isCaptain: false },
    { name: "Enzo Fernandez", position: "midfielder", isCaptain: false },
    { name: "Alexis Mac Allister", position: "midfielder", isCaptain: false },
    { name: "Cristian Romero", position: "defender", isCaptain: false },
    { name: "Lisandro Martinez", position: "defender", isCaptain: false },
    { name: "Nicolas Tagliafico", position: "defender", isCaptain: false },
    { name: "Nicolas Otamendi", position: "defender", isCaptain: false },
    { name: "Emiliano Martinez", position: "goalkeeper", isCaptain: false }
  ]
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const selectPlayers = document.getElementById("players");

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

function renderCards(players) {
  playerCards.innerHTML = players.map(p => `
    <div class="player-card">
      <h2>${p.isCaptain ? "(Captain) " : ""}${p.name}</h2>
      <p>Position: ${p.position}</p>
    </div>
  `).join("");
}

renderCards(footballTeam.players);

selectPlayers.addEventListener("change", () => {
  const selectedValue = selectPlayers.value;

  const filtered = selectedValue === "all"
    ? footballTeam.players
    : footballTeam.players.filter(p => p.position === selectedValue);

  renderCards(filtered);
});
