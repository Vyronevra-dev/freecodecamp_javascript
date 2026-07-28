// Adding a dollar sign to every price

const prices = [200, 500, 899, 999, 1999];
const dollaredPrices = prices.map((price) => "$" + price);

console.log(dollaredPrices);

// Using for loops

const pricess = [203, 340, 999, 9999, 1099];
const dollaredPricess = [];

for (let i = 0; i < pricess.length; i++) {
	dollaredPricess.push("$" + pricess[i]);
}
console.log(dollaredPricess);
