function sanitizeLog(entry, disallowedCharacters) {
  const disallowedSet = new Set(disallowedCharacters);
  return entry
    .split("")
    .map((char) => (disallowedSet.has(char) ? "#" : char))
    .join("");
}

function cleanLogs(logs, disallowedCharacters) {
  let sanitizedCount = 0;
  let informationalCount = 0;

  for (const entry of logs) {
    if (entry.includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }

    if (entry.startsWith("/")) {
      informationalCount++;
    } else {
      sanitizeLog(entry, disallowedCharacters);
      sanitizedCount++;
    }
  }

  const totalCount = logs.length;
  return `Total Entry Count: ${totalCount}. Sanitized Entry Count: ${sanitizedCount}. Informational Entry Count: ${informationalCount}. Finished sanitizing logs.`;
}
