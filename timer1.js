const myArgs = process.argv.slice(2);

myArgs.forEach((num) => {
  if (num >= 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
});
