import {initNetworkUtils} from './utils/networkUtils';
const networkUtils = initNetworkUtils();

let chunkSizeInBytes = 1024 * 1024; // 1 MiB = 1024 * 1024 bytes
let url = 'http://8f60f463.bwtest-aws.pravala.com/384MB.jar';

/**
 * Return a promise to fetch a data chunk
 * @param {String}      url                 The url to fetch
 * @param {int}         startBytes          Bytes to start chunk at
 * @param {int}         chunkSizeInBytes    Bytes to stop chunk at
 */
function getChunk(url, startBytes, chunkSizeInBytes) {
    return networkUtils.http({
        method: 'get',
        url: url,
        headers: {
            'Range': 'bytes=' + startBytes + '-' + (startBytes + chunkSizeInBytes - 1)
        }
    })
    .then(response => {
        console.log('found response');
        printChunkInfo(response);
        return response;
    })
    .catch(err => {
        console.log(err);
        throw new Error('error');
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

// Asynchronous
networkUtils.httpResolveAllInOrder([
    getChunk(url, 0, chunkSizeInBytes),
    getChunk(url, 1 * chunkSizeInBytes, chunkSizeInBytes),
    getChunk(url, 2 * chunkSizeInBytes, chunkSizeInBytes),
    getChunk(url, 3 * chunkSizeInBytes, chunkSizeInBytes)
]).then(chunks => {
    // We get back the ordered chunks
    console.log('done!');
    chunks.map(chunk => printChunkInfo(chunk));
});