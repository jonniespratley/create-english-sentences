const API_URL = 'https://linguatools-sentence-generating.p.rapidapi.com/realise';

const cache = new Map();

export class ApiService {  
  async request(params){
    const apiHeaders = new Headers();
          apiHeaders.append("x-rapidapi-key", "PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab");
          apiHeaders.append("x-rapidapi-host", "linguatools-sentence-generating.p.rapidapi.com");
          const {subject, verb, object, noun, tense} = params;
          const searchParams = new URLSearchParams([
            ['subject', subject], 
            ['verb', verb],
            ['tense', tense],
            ['object', object]
          ]);
      
    const url = `${API_URL}?${searchParams.toString()}`
    const response = await fetch(url, {headers: apiHeaders});
    const json = await response.json();
    return json
  }

  async getSentence(params){
    let key = JSON.stringify(params);
    if(cache.has(key)){
      return cache.get(key);
    }
    let resp = await this.request(
      params
    );
    cache.set(key, resp);

    return resp;
  }
}