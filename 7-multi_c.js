const args = process.argv.slice(2);
const times = parseInt(args[0]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else if (times > 0) {
  let output = '';
  for (let i = 0; i < times; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}

