'use strict';

var program = require('commander');
var controller = require('./controller');
var cmdUrl;

program
    .version('0.1.0')
    .arguments('<url>')
    .action(function (url) {
        cmdUrl = url;
    });

program.parse(process.argv);

if (typeof cmdUrl === 'undefined') {
    console.error('no url given!');
    process.exit(1);
}
console.log('File:', cmdUrl);
controller.multiGet(cmdUrl);
