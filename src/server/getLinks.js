import fs from "fs";

export function getLinks() {
  const result = fs
    .readdirSync("./public/css")
    .filter(file => file.endsWith(".css"))
    .map(file => `<link rel="stylesheet" href="./css/${file}"/>`);
  return result.join("\n");
}
