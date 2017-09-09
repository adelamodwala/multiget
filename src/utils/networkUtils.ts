import axios from 'axios';

/**
 * A simple HTTP request configuration interface for making HTTP calls
 */
export interface RequestConfig {
    url?: string;
    method?: string;
    baseURL?: string;
    headers?: any;
    data?: any;
    responseType?: string;
}

/**
 * A utility that provides network level functionality
 */
export interface INetworkUtils {

    /**
     * Make an HTTP request
     * @param   {RequestConfig} requestConfig   HTTP request config
     * @returns {Promise<Object>}               Promise response
     */
    http(requestConfig: RequestConfig): Promise<any>;

    /**
     * Resolve an array of http request promises in order
     * @param {Promise<Object>[]}   httpRequests An array of http request promises
     * @returns {Promise<Object[]>} A promise that resolves into the ordered response of each resolved http request
     */
    httpResolveAllInOrder(httpRequests: Promise<any>[]): Promise<any[]>;
}

export class NetworkUtils implements INetworkUtils {

    httpApi: any;

    constructor(httpApi: any) {
        this.httpApi = httpApi;
    }

    /**
     * Make an HTTP request
     * @param {RequestConfig} requestConfig         HTTP request config
     * @returns {Promise<Object>}                   Promise response
     */
    http(requestConfig: RequestConfig): Promise<any> {
        return this.httpApi(requestConfig);
    }

    /**
     * Resolve an array of http request promises in order
     * @param {Promise<Object>[]}   httpRequests An array of http request promises
     * @returns {Promise<Object[]>} A promise that resolves into the ordered response of each resolved http request
     */
    httpResolveAllInOrder(httpRequests: Promise<any>[]): Promise<any[]> {
        return this.httpApi.all(httpRequests);
    }

}

/**
 * A factory method to instantiate an INetworkUtils object with an injected HttpApi dependency
 * @returns {INetworkUtils}
 */
export function initNetworkUtils(): INetworkUtils {
    return new NetworkUtils(axios);
}