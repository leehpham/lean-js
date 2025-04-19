const crypto = require("node:crypto");

const sha256Digest = (message, encoding) =>
  crypto.createHash("sha256").update(message).digest(encoding);

console.log(sha256Digest("Hello world!"));
console.log(sha256Digest("Hello world!", "hex"));
console.log(sha256Digest("Hello world", "base64"));
