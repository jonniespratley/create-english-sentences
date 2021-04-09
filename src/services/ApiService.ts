// TODO - These generally should be environment variables
const API_URL =
  "https://linguatools-sentence-generating.p.rapidapi.com/realise";

const API_KEY = "PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab";
const API_HOST = "linguatools-sentence-generating.p.rapidapi.com";

const cache = new Map();

export class ApiService {
  static getCache() {
    return cache;
  }
  /**
   * Handle making a request to the api service and caching the result.
   */
  static async request(url, opts) {
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
  static async getSentence({ subject, verb, object, tense, type }) {
    const apiHeaders = new Headers();
    apiHeaders.append("x-rapidapi-key", API_KEY);
    apiHeaders.append("x-rapidapi-host", API_HOST);
    const searchParams = new URLSearchParams([
      ["subject", subject],
      ["sentencetype", type],
      ["verb", verb],
      ["tense", tense],
      ["object", object]
    ]);
    const url = `${API_URL}?${searchParams.toString().toLowerCase()}`;
    return ApiService.request(url, { headers: apiHeaders });
  }
}
