# MultiGET
This is a NodeJS application that attempts to boost downloads. It attempts to get multiple chunks of the requested file in parallel to speed up downloads.

Currently, it only supports downloading 4 chunks of 1MiB each for files that are at least 4MiB large.

To build locally, pull down the repository and cd into it. Then run:
```
$ npm install
$ npm run build
```
This will create an executable node script under `dist/multiGet.js`.

To run the executable `multiGet.js` simply call `$ ./multiGet.js`. 

Usage is as follows:
```
  Usage: multiGet [OPTIONS] <url>


  Options:

    -o, --output [outfile]  Write output to [outfile] instead of default
    -h, --help              output usage information
```