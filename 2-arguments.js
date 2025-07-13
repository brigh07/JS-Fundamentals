// Get command-lind arguments (excluding node script name)
const args = process.argv.slice(2);

// check the number of arguments and print a message
if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log ("Arguments found");
}