const fs = require("fs");

// fs.writeFile("./example.txt", "Before", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File successfully created!");
//     fs.readFile("./example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// fs.writeFile("./example.txt", "After", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File successfully updated!");
//     fs.readFile("./example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

function readDataFromFile(callback) {
  fs.readFile("./data.json", "utf8", (err, file) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(file));
    }
  });
}

module.exports = { readDataFromFile };
