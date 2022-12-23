// Asyncronous
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (e, r) => {
  if (e) {
    console.log(e);
    // console.log("there was an error");
    return;
  }
  console.log(r);
  const first = r;

  readFile("./content/second.txt", "utf8", (e, r) => {
    if (e) {
      console.log(e);
      return;
    }
    console.log(r);
    const second = r;

    writeFile(
      "./content/result-async.txt",
      `Here is result : ${first}, ${second}`,
      (e, r) => {
        if (e) {
          console.log(e);
          return;
        }
        console.log(r);
      }
    );
  });
});
