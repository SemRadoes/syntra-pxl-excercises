const fs = require('fs');
const file = "./leren programmeren/probeersel.js";
const dateCreated = fs.statSync(file).birthtime;
console.log(dateCreated);