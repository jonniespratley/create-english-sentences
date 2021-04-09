import { InputData } from '../Props';

// TODO - These generally should be environment variables
const API_URL = 'https://linguatools-sentence-generating.p.rapidapi.com/realise';

const API_KEY = 'PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab';
const API_HOST = 'linguatools-sentence-generating.p.rapidapi.com';

const cache = new Map();

interface ApiResponse {
    result: string;
    sentence: string;
}

export class ApiService {
    static getCache(): Map<string, ApiResponse> {
        return cache;
    }
    /**
     * Handle making a request to the api service and caching the result.
     */
    static async request(url: string, opts: RequestInit): Promise<ApiResponse> {
        const key = JSON.stringify(url);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const response = await fetch(url, opts);
        const json = await response.json();
        cache.set(key, json);
        return json;
    }

    /**
     * Handle making a request to generate a new sentence
     */
    static async getSentence(props: InputData): Promise<ApiResponse> {
        const { type } = props;
        const apiHeaders = new Headers();
        apiHeaders.append('x-rapidapi-key', API_KEY);
        apiHeaders.append('x-rapidapi-host', API_HOST);

        const searchParams = new URLSearchParams({
            ...props,
            sentencetype: type
        });

        const url = `${API_URL}?${searchParams.toString()}`;
        return ApiService.request(url, { headers: apiHeaders });
    }
}
