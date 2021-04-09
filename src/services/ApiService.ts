


import got from 'got';

const API_URL = 'https://linguatools-sentence-generating.p.rapidapi.com/realise';

async function fetchSentence(params){
  
const apiHeaders = new Headers();
apiHeaders.append("x-rapidapi-key", "PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab");
  apiHeaders.append("x-rapidapi-host", "linguatools-sentence-generating.p.rapidapi.com");
  const {subject, verb, object, noun, tense} = params;
  let url = `${API_URL}?subject=${subject}&verb=${verb}&object=${object}&tense=${tense}`
  const response = await fetch(url, {headers: apiHeaders});
  const json = await response.json();
  
  return json;
}


const headers = {
  'x-rapidapi-key': 'PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab',
  'x-rapidapi-host': 'linguatools-sentence-generating.p.rapidapi.com',
}


export class ApiService {
  instance: any;

  constructor(){
    this.instance = got.extend({
      url: API_URL,
      headers
    });

  }

  async request(options){
    return this.instance.get(options).json();
  }

  getSentence(params){
    const {subject, verb, object, noun, tense} = params;
    const searchParams = new URLSearchParams([
      ['subject', subject], 
      ['verb', verb],
      ['tense', tense],
      ['object', object]
    ]);

    return this.request({
      searchParams
    })

  }
}