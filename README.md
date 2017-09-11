# MultiGET
This is a NodeJS application that attempts to boost downloads. It retrieves multiple chunks of the requested file in parallel and saves the file in the working directory.

Currently, it only supports downloading 4 chunks of 1MiB each for files that are at least 4MiB large.

To build locally, pull down the repository and cd into it. Then run:
```
$ npm install
$ npm run build
```
This will create an executable node script under `dist/multiGet.js`.

To run the executable simply call `$ ./multiGet.js`. This is a NodeJS script and hence you must have NodeJS installed.

Usage is as follows:
```
  Usage: multiGet [OPTIONS] <url>


  Options:

    -o, --output [outfile]  Write output to [outfile] instead of default
    -s, --size [num]        Set how much of the file you want to download in MiB where [num] is an integer
    -h, --help              output usage information
```