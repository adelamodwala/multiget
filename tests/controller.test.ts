import {INetworkUtils, NetworkUtils} from "../src/utils/networkUtils";
import {Controller} from '../src/controller';
import * as fs from "fs";
import {PathLike} from "fs";

// Instantiate mock HttpApi and NetworkUtils
const mockHttpApi = jest.fn((httpRequest) => {
    return new Promise((resolve, reject) => {
        return resolve({a: 'b'});
    });
});
const mockNetworkUtils: INetworkUtils = new NetworkUtils(mockHttpApi);

describe('controller tests', () => {

    // Instantiate the controller with mock dependencies
    const controller: Controller = new Controller(mockNetworkUtils);

    it('getChunk is defined', () => {
        expect(typeof controller.getChunk).toBe('function');
    });

    it('getChunk makes appropriate network calls for retrieving data through Range header', () => {
        let url = "http://8f60f463.bwtest-aws.pravala.com/384MB.jar";

        controller.getChunk(url, 0, 1024)
            .then(result => {
                expect(result).toBeDefined();
                expect(mockHttpApi.mock.calls.length).toBe(1);
                expect(mockHttpApi.mock.calls["0"]["0"]).toEqual({
                    method: 'get',
                    url: url,
                    headers: {
                        'Range': 'bytes=0-1023'
                    },
                    responseType: "arraybuffer"
                });
            });
    });

    it('validateFile throws an exception if the file currently exists in the working directory', () => {
        fs.existsSync = jest.fn((fileName: PathLike) => true);

        try {
            controller.validateFile("abc.txt");
        }
        catch (err) {
            expect(err.name).toBe("FileExists");
        }
    });

    it('validateFile does not throw an error when file does not exist in the working directory', () => {
        fs.existsSync = jest.fn((fileName: PathLike) => false);
        expect(controller.validateFile("abc.txt")).toBe(true);
    });

});