var http = require('axios');
var syncHttp = require('sync-request');

var chunkSizeInBytes = 1024 * 1024; // 1 MiB = 1024 * 1024 bytes
var startBytes = 0;
var url = 'http://8f60f463.bwtest-aws.pravala.com/384MB.jar';
var doAsync = false;

/**
 * Return a promise to fetch a data chunk
 * @param {String}      url                 The url to fetch
 * @param {int}         startBytes          Bytes to start chunk at
 * @param {int}         chunkSizeInBytes    Bytes to stop chunk at
 */
function getChunk(url, startBytes, chunkSizeInBytes) {
    return http({
        method: 'get',
        url: url,
        headers: {
            'Range': 'bytes=' + startBytes + '-' + (startBytes + chunkSizeInBytes - 1)
        }
    })
    .then(function (response) {
        console.log('found response');
        printChunkInfo(response);
        return response;
    })
    .catch(function (err) {
        console.log(err);
        throw new Exception('error');
    });
}

/**
 * Print out the range information fo the chunk response
 * @param {Response} chunk 
 */
function printChunkInfo(chunk) {
    console.log(chunk.headers['content-range']);
    console.log(chunk.headers['content-length']);
}

if (doAsync) {
    // Asynchronous
    http.all([
        getChunk(url, 0, chunkSizeInBytes),
        getChunk(url, 1 * chunkSizeInBytes, chunkSizeInBytes),
        getChunk(url, 2 * chunkSizeInBytes, chunkSizeInBytes),
        getChunk(url, 3 * chunkSizeInBytes, chunkSizeInBytes)
    ]).then(function (chunks) {
        // We get back the ordered chunks
        console.log('done!');
        chunks.map(function (chunk) {
            printChunkInfo(chunk);
        });
    });
}
else {
    // Synchronous
    for (var i = 0; i < 4; i++) {
        var response = syncHttp('GET', url, {
            'headers': {
                'Range': 'bytes=' + startBytes + '-' + (startBytes + chunkSizeInBytes - 1)
            }
        });
        console.log('found response');
        printChunkInfo(response);

        startBytes += chunkSizeInBytes

    }
}