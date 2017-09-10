import * as fs from 'fs';
import {INetworkUtils, initNetworkUtils} from './utils/networkUtils';

const networkUtils: INetworkUtils = initNetworkUtils();

const mebiByteInBytes: number = 1024 * 1024; // 1 MiB = 1024 * 1024 bytes

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
    }).catch(err => {
        // Log an informative message and throw an exception
        console.error(err.message);
        throw err;
    });
}

/**
 * Perform a multi get for the given url
 * @param   {string} url                  The url of the file to be downloaded
 * @param   {string?} fileName            The name of the file. If none is given a default value is used.
 * @param   {number?} parts               The number of parts to download
 * @param   {number?} chunkSizeInBytes    The size of the chunks to be downloaded in bytes
* @throws   {Error}                       Network and fs Errors
 */
export function multiGet(url: string, fileName: string, parts: number = 4, chunkSizeInBytes: number = mebiByteInBytes) {

    // Set the default file name to the name on the path
    if (fileName === "") {
        fileName = url.split('/').pop();
    }

    // Check if the file exists in the current directory
    if(fs.existsSync(fileName)) {
        // Show an informative message and throw an exception
        console.error(fileName + " already exists");
        throw new Error();
    }

    // Open up our requests asynchronously and pool them in the requests array in order. This is effectively
    // parallelism in javascript networking.
    let requests = [];
    for (let i = 0; i < parts; i++) {
        let request = getChunk(url, i * chunkSizeInBytes, chunkSizeInBytes)
            .then(resp => {

                // Indicate the progress with a '.' when a chunk has been downloaded
                process.stdout.write('.');
                return resp;
            });
        requests.push(request);
    }

    // Call the ordered promise handler
    networkUtils.httpResolveAllInOrder(requests).then(chunks => {

        // We get back the ordered chunks

        // Open a write stream with the appropriate file name and error handling
        let writeStream = fs.createWriteStream(fileName)
            .on('error', err => {
                // Let the user know that a file stream error occurred
                console.error(err.message);
            })
            .on('finish', () => {
                // Let the user know the program has completed
                process.stdout.write('done\n');
            });


        chunks.map(chunk => {
            // Write each chunks data, which is an array buffer, into the write stream
            writeStream.write(chunk.data);
        });

        // Close the stream
        writeStream.end();
    });
}