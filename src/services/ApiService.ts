const API_URL =
  "https://linguatools-sentence-generating.p.rapidapi.com/realise";

const cache = new Map();

export class ApiService {
  /**
   * Handle making a request to the api service to create a sentence.
   * @param params Object of parameters to send to api service
   * @returns
   */
  static async request(params) {
    const apiHeaders = new Headers();
    apiHeaders.append("x-rapidapi-key", "PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab");
    apiHeaders.append(
      "x-rapidapi-host",
      "linguatools-sentence-generating.p.rapidapi.com"
    );
    const { subject, verb, object, noun, tense, type } = params;
    const searchParams = new URLSearchParams([
      ["subject", subject],
      ["sentencetype", type],
      ["verb", verb],
      ["tense", tense],
      ["object", object],
    ]);

    const url = `${API_URL}?${searchParams.toString().toLowerCase()}`;
    let key = JSON.stringify(url);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const response = await fetch(url, { headers: apiHeaders });
    const json = await response.json();
    cache.set(key, json);
    return json;
  }
  /**
   *
   * @param params
   * @returns
   */
   static async getSentence(params) {
    return ApiService.request(params);
  }
}
