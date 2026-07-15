 const scores = [45, 72, 88, 34, 95, 61];

for (let i = 0; i < scores.length; i++) { 
	 if (scores[i] >= 90) {
		 console.log(`First score over 90 found: ${scores[i]} at index ${i}`); 
		 break;
	 } 
 }
