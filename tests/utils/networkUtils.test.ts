jest.useFakeTimers(); // Allows us to set fake timeouts that resolve in relative order
import {NetworkUtils, initNetworkUtils} from "../../src/utils/networkUtils"

/**
 * Generate a timeout promise that resolves after the given milliseconds
 * @param retVal A return value once resolved
 * @param ms Milliseconds after which to resolve the promise
 * @returns {Promise}
 */
const mockTimeoutPromise = (retVal: string, ms: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(retVal);
        }, ms);
    }).then(retVal => retVal);
};


describe("networkUtils tests", () => {

    it('exists', () => {
        expect(NetworkUtils).toBeDefined();
    });

    it('handles an http request', () => {

        // Set up the test to make an http request. We don't want to make an actual network call
        // during the test, hence we must mock.
        let mockHttpApi = jest.fn((httpRequest) => {
            return new Promise((resolve, reject) => {
                return resolve({a: 'b'});
            });
        });
        let networkUtils = new NetworkUtils(mockHttpApi);

        // Call the utility method to make the http call
        networkUtils.http({
            method: 'get',
            url: 'http://www.example.com'
        }).then(resp => {
            // Check that the injected httpApi was appropriately called
            expect(mockHttpApi.mock.calls.length).toEqual(1);

            // Check that we received our expected payload
            expect(resp.a).toEqual('b');
        });
    });

    it('orders an array of asynchronous calls in order of call execution, not resolution', () => {

        // Since we'll be using mock promises in stead of HTTP calls, we want to call through to the
        // actual implementation of the httpResolveAllInOrder.
        let networkUtils = initNetworkUtils();

        networkUtils.httpResolveAllInOrder([
            mockTimeoutPromise('t', 5),
            mockTimeoutPromise('i', 1),
            mockTimeoutPromise('m', 2),
            mockTimeoutPromise('e', 4)
        ]).then(responses => {
            expect(responses).toEqual(['t', 'i', 'm', 'e']);
        });

        // Artificially induce the completion of all timers in order of timeout length.
        // This allows us to test
        jest.runAllTimers();
    });
});