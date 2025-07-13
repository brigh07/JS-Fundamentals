const args = process.argv.slice(2);

if (isNaN(args[0]) || args[0] <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = '';
  for (let i = 0; i < parseInt(args[0]); i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
