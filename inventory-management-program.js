// 1. Declare an empty array named inventory
let inventory = [];

// 2. Create findProductIndex function
function findProductIndex(name) {
  const lowerCaseName = name.toLowerCase();
  return inventory.findIndex(product => product.name === lowerCaseName);
}

// 3. Create addProduct function
function addProduct(product) {
  const lowerCaseName = product.name.toLowerCase();
  const index = findProductIndex(lowerCaseName);

  if (index !== -1) {
    // Product is already present; update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${lowerCaseName} quantity updated`);
  } else {
    // Product is not present; add to inventory
    inventory.push({
      name: lowerCaseName,
      quantity: product.quantity
    });
    console.log(`${lowerCaseName} added to inventory`);
  }
}

// 4. Create removeProduct function
function removeProduct(name, quantity) {
  const lowerCaseName = name.toLowerCase();
  const index = findProductIndex(lowerCaseName);

  // If product is not present in the inventory
  if (index === -1) {
    console.log(`${lowerCaseName} not found`);
    return;
  }

  const currentQuantity = inventory[index].quantity;

  // If there isn't enough quantity to remove
  if (currentQuantity < quantity) {
    console.log(`Not enough ${lowerCaseName} available, remaining pieces: ${currentQuantity}`);
  } else {
    // Subtract the quantity
    inventory[index].quantity -= quantity;
    console.log(`Remaining ${lowerCaseName} pieces: ${inventory[index].quantity}`);

    // If quantity hits zero, remove the object from the array entirely
    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    }
  }
}
