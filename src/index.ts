#! /usr/bin/env node
import fs from "fs";

async function main() {
  let fileSelected = fs.readFileSync("dumy");
  return "abc";
}

main()
  .then(text => {
    console.log("Run success.");
  })
  .catch(err => {
    // Deal with the fact the chain failed
    console.log("Run failed! ", err);
  });
