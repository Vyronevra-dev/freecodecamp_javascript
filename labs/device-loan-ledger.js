const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

// Helper to deep clone the ledger without mutating the original
function cloneLedger(ledger) {
  return JSON.parse(JSON.stringify(ledger));
}

// 1. Checkout Device
function checkoutDevice(ledger, assetTag, borrower) {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = cloneLedger(ledger);
  updatedLedger[assetTag].status = "CheckedOut";
  updatedLedger[assetTag].borrower = {
    name: borrower.name || "",
    email: borrower.email || ""
  };
  if (borrower.dueDate) {
    updatedLedger[assetTag].dueDate = borrower.dueDate;
  }

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

// 2. Checkin Device
function checkinDevice(ledger, assetTag) {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  const updatedLedger = cloneLedger(ledger);
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].borrower = { name: "", email: "" };
  updatedLedger[assetTag].dueDate = "";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked in.`
  };
}

// Helper to convert M/D/YYYY string into a YYYYMMDD numeric value without Date object
function parseDateString(dateStr) {
  const parts = dateStr.split("/");
  const month = parts[0].padStart(2, "0");
  const day = parts[1].padStart(2, "0");
  const year = parts[2];
  return Number(`${year}${month}${day}`);
}

// 3. List Overdue Devices
function listOverdueDevices(ledger, today) {
  const todayNum = parseDateString(today);
  const overdueDevices = [];

  for (const assetTag in ledger) {
    const device = ledger[assetTag];
    if (device.status === "CheckedOut" && device.dueDate) {
      const dueNum = parseDateString(device.dueDate);
      if (dueNum < todayNum) {
        overdueDevices.push(device);
      }
    }
  }

  // Sort by dueDate in ascending order
  overdueDevices.sort((a, b) => parseDateString(a.dueDate) - parseDateString(b.dueDate));

  return overdueDevices;
}

// 4. Serialize Ledger
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

// 5. Load Ledger
function loadLedger(json) {
  return JSON.parse(json);
}
