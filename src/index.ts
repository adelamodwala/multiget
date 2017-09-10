const program = require('commander');
const controller = require('./controller');
let cmdUrl;

// Scaffold a CLI program
program
    /**
     * Set the ordering of options and arguments for usage
     */
    .usage('[OPTIONS] <url>')
    /**
     * Define the options available to the user
     */
    // Optional file name option
    .option('-o, --output [outfile]', 'Write output to [outfile] instead of default')
    /**
     * Define the arguments of the program and actions associated with receiving them
     */
    // Required url argument
    .arguments('<url>')
    .action(function (url) {
        cmdUrl = url;
    });

// Parse the programs arguments provided by the user
program.parse(process.argv);

// Sanitize and validate the inputs
if(typeof cmdUrl === 'undefined') {
    program.outputHelp();
    process.exit(1);
}
let fileName = program.output || "";

// Call the controllers multiGet method to perform the intended download
try {
    controller.multiGet(cmdUrl, fileName);
}
catch (err) {
    process.exit(1);
}