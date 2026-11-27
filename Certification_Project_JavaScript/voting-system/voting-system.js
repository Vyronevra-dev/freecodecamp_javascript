// 1. Initialize poll variable to a new Map object
const poll = new Map();

// 2 & 3. Define addOption function
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 4 & 5. Define vote function
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 8. Define displayResults function
function displayResults() {
  let results = "Poll Results:";

  for (const [option, voters] of poll.entries()) {
    results += `\n${option}: ${voters.size} votes`;
  }

  return results;
}

// 6. Add at least three options to the poll
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

// 7. Cast at least three votes
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
