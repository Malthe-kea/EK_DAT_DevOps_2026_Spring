import fs from "fs";

const response = await fetch("https://www.proshop.dk/Baerbar-computer");
const result = await response.text();
const page = fs.writeFileSync("laptop.html", result);

console.log(page)