function convertHTML(str) {
  // Mapping of special characters to their HTML entities
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Use a regular expression to find and replace matching characters
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}
