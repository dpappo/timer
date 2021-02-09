const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");
// const myArgs = process.argv.slice(2);

// myArgs.forEach((num) => {
//   if (num >= 0) {
//     setTimeout(() => {
//       process.stdout.write("\x07");
//     }, num * 1000);
//   }
// });

// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", (key) => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === "b") {
    process.stdout.write("\x07");
  } else if (key > 0) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
});
