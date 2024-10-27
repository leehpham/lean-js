import * as crypto from "node:crypto";

function sha256Digest(message, encoding) {
  return crypto.createHash("sha256").update(message).digest(encoding);
}

console.log(sha256Digest("Hello world!"));
console.log(sha256Digest("Hello world!", "hex"));
console.log(sha256Digest("Hello world", "base64"));
