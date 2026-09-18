function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = [];

  for (let i = 0; i < length; i++) {
    let randomChar = Math.floor(Math.random() * characters.length);  
    password.push(characters[randomChar]);

  }

  return password.join("");
}

let password = generatePassword(10);

console.log("Generated password: " + password);
