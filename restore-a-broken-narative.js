const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

// 1. Remove undefined elements
function compactFragments(arr) {
  const result = [];
  let hasRemovedElements = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      hasRemovedElements = true;
    } else {
      result.push(arr[i]);
    }
  }

  if (hasRemovedElements) {
    console.log("[COMPACTED] Removed undefined elements from the array.");
  }
  
  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

// 2. Sort fragments (Custom stable sort algorithm: Bubble Sort)
function sortFragments(arr) {
  const result = [...arr]; // Copy array to prevent mutating the original input

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j].id > result[j + 1].id) {
        // Swap elements
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

// 3. Remove duplicates keeping the first occurrence
function dedupeFragments(arr) {
  const result = [];
  const seenIds = new Set();

  for (let i = 0; i < arr.length; i++) {
    const fragment = arr[i];
    if (seenIds.has(fragment.id)) {
      console.log(`[DEDUPED] Removed duplicate fragment for id: ${fragment.id}`);
    } else {
      seenIds.add(fragment.id);
      result.push(fragment);
    }
  }

  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

// 4. Fill in missing fragments with placeholders
function fillMissingFragments(arr) {
  if (arr.length === 0) return [];
  
  const result = [];
  let arrIndex = 0;
  const minId = arr[0].id;
  const maxId = arr[arr.length - 1].id;

  for (let currentId = minId; currentId <= maxId; currentId++) {
    if (arrIndex < arr.length && arr[arrIndex].id === currentId) {
      result.push(arr[arrIndex]);
      arrIndex++;
    } else {
      console.log(`[FILLED] Added missing placeholder for id: ${currentId}`);
      result.push({ id: currentId, text: "[...]" });
    }
  }

  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

// 5. Assemble and print the final story
function assembleStory(arr) {
  let story = "";
  for (let i = 0; i < arr.length; i++) {
    story += arr[i].text;
    if (i < arr.length - 1) {
      story += "\n";
    }
  }
  return story;
}

console.log("\n--- RESTORED STORY ---\n");
console.log(assembleStory(filledFragments));
