import axios from 'axios';

/**
 * A simple HTTP request configuration interface for making HTTP calls
 */
interface RequestConfig {
    url?: string;
    method?: string;
    baseURL?: string;
    headers?: any;
    data?: any;
}

/**
 * A utility that provides network level functionality
 */
interface INetworkUtils {

    /**
     * Make an HTTP request
     * @param {RequestConfig} requestConfig         HTTP request config
     * @returns {Promise<Object>}                   Promise response
     */
    http(requestConfig: RequestConfig): Promise<Object>;

    httpAllInOrder(httpRequests: Promise<Object>[]): Promise<Object[]>;
}

class NetworkUtils implements INetworkUtils {

    httpApi: any;

    constructor(httpApi: any) {
        this.httpApi = httpApi;
    }

    /**
     * Make an HTTP request
     * @param {RequestConfig} requestConfig         HTTP request config
     * @returns {Promise<Object>}                   Promise response
     */
    http(requestConfig: RequestConfig): Promise<Object> {
        return this.httpApi(requestConfig);
    }

    httpAllInOrder(httpRequests: Promise<Object>[]): Promise<Object[]> {
        return this.httpApi.all(httpRequests);
    }

}

export default new NetworkUtils(axios);