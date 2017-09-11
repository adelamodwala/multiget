import * as program from 'commander';
import * as controller from './controller';
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
    // Optional file size in MiB
    .option('-s, --size [num]', 'Set how much of the file you want to download in MiB where [num] is an integer')
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
let size = program.size || undefined;
if(typeof size !== 'undefined') {
    // Ensure that we only grab the integer part of the given number
    size = size << 0;
}


// Call the controllers multiGet method to perform the intended download
try {
    controller.multiGet(cmdUrl, fileName, size)
    // Handle Asynchronous errors
        .catch(handleAppError);
}
catch (err) {
    // Handle Synchronous errors
    handleAppError(err);
}

/**
 * Handle application wide errors
 * @param err
 */
function handleAppError(err) {
    // Display an error message and shut down the process
    console.error(err.name, err.message);
    process.exit(1);
}