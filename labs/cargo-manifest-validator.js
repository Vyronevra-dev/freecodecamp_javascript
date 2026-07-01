function normalizeUnits(manifest) {
  // Create a copy to avoid mutation
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};
  
  // Define validation rules
  const checks = {
    containerId: (val) => Number.isInteger(val) && val > 0,
    destination: (val) => typeof val === 'string' && val.trim().length > 0,
    weight: (val) => typeof val === 'number' && !Number.isNaN(val) && val > 0,
    unit: (val) => val === 'kg' || val === 'lb',
    hazmat: (val) => typeof val === 'boolean'
  };

  for (let key in checks) {
    if (!(key in manifest)) {
      errors[key] = "Missing";
    } else if (!checks[key](manifest[key])) {
      errors[key] = "Invalid";
    }
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  
  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${normalized.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
