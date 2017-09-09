import * as fs from 'fs';
import {INetworkUtils, initNetworkUtils} from './utils/networkUtils';
const networkUtils: INetworkUtils = initNetworkUtils();

let mebiByteInBytes: number = 1024 * 1024; // 1 MiB = 1024 * 1024 bytes

/**
 * Return a promise to fetch a data chunk
 * @param {String}      url                 The url to fetch
 * @param {int}         startBytes          Bytes to start chunk at
 * @param {int}         chunkSizeInBytes    Bytes to stop chunk at
 */
function getChunk(url: string, startBytes: number, chunkSizeInBytes: number) {
    return networkUtils.http({
        method: 'get',
        url: url,
        headers: {
            'Range': 'bytes=' + startBytes + '-' + (startBytes + chunkSizeInBytes - 1)
        },
        responseType: "arraybuffer"
    })
    .catch(err => {
        console.log(err);
        throw new Error('error');
    });
}

/**
 * Perform a multi get for the given url
 * @param {string} url
 * @param {number} parts
 * @param {number} chunkSizeInBytes
 */
export function multiGet(url: string, parts: number = 4, chunkSizeInBytes: number = mebiByteInBytes) {

    // Open up our requests asynchronously and pool them in the requests array in order
    let requests = [];
    for(let i = 0; i < parts; i++) {
        requests.push(getChunk(url, i * chunkSizeInBytes, chunkSizeInBytes));
    }

    // Call the ordered promise handler
    networkUtils.httpResolveAllInOrder(requests).then(chunks => {
        // We get back the ordered chunks
        console.log('done!');

        // let fileName = chunks[0].request.path;
        let writeStream = fs.createWriteStream("out.jar");
        chunks.map(chunk => {
            let buff = new Buffer(chunk.data);
            writeStream.write(buff);
        });
        writeStream.end();

    });
}