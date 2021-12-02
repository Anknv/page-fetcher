const request = require('request');
const fs = require('fs');

const domain = process.argv[2];
const path = process.argv[3];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error)
    return
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
  console.log("Hi Anna")
});

for (let i = 0; i < 10000; i++) {
  console.log(i);
}