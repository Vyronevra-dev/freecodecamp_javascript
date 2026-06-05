function maskEmail(email) {
  const tag = email.indexOf("@");
  const localPart = email.slice(0, tag);
  const domain = email.slice(tag);
  const mask = localPart[0] + "*".repeat(localPart.length - 2) + localPart[localPart.length - 1];
  return mask + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));
