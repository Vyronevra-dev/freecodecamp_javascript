const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

// 1. Parse shipment data and ignore duplicate SKUs
function parseShipment(rawData) {
  let result = [];
  let skuSeen = [];

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    let sku = parts[0];
    let name = parts[1];
    let qty = parts[2];
    let expires = parts[3];
    let zone = parts[4];

    if (skuSeen.includes(sku)) {
      continue;
    } else { 
      skuSeen.push(sku);
      result.push({
        sku: sku,
        name: name,
        qty: Number(qty),
        expires: expires,
        zone: zone || "general"
      });
    }
  }

  return result;
}

// 2. Plan restock actions based on pantry inventory and item quantity
function planRestock(pantry, shipment) {
  let actions = [];
  let pantrySkus = pantry.map(item => item.sku);

  for (let i = 0; i < shipment.length; i++) {
    let item = shipment[i];
    let type = "";

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkus.includes(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type: type, item: item });
  }

  return actions;
}

// 3. Group actions by their storage zone
function groupByZone(actions) {
  let grouped = {};

  for (let i = 0; i < actions.length; i++) {
    let action = actions[i];
    let zone = action.item.zone || "general";

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

// 4. Create a deep copy of the pantry array
function clonePantry(pantry) {
  let clone = [];
  for (let i = 0; i < pantry.length; i++) {
    let item = pantry[i];
    clone.push({
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    });
  }
  return clone;
}

// --- Execution & Logging ---
const shipment = parseShipment(rawData);
const safePantry = clonePantry(pantry);
const restockActions = planRestock(safePantry, shipment);
const groupedResult = groupByZone(restockActions);

console.log(groupedResult);
