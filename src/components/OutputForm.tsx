import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useFetch } from "../hooks";

interface OutputFormProps {
  sentence?: string;
  params?: any;
}

async function fetchSentence(params){
  const API_URL = 'https://linguatools-sentence-generating.p.rapidapi.com/realise';
const apiHeaders = new Headers();
apiHeaders.append("x-rapidapi-key", "PUBWWqyBE7L60sVBPAq-dpe0TlC5I0Ab");
  apiHeaders.append("x-rapidapi-host", "linguatools-sentence-generating.p.rapidapi.com");
  const {subject, verb, object, noun, tense} = params;
  let url = `${API_URL}?subject=${subject}&verb=${verb}&object=${object}&tense=${tense}`
  const response = await fetch(url, {headers: apiHeaders});
  const json = await response.json();
  
  return json;
}

export const OutputForm: React.FC<OutputFormProps> = ({ params }) => {
  const [sentence, setSentence] = React.useState();
  React.useEffect(() => {
    async function fetchData(){
      let res = await fetchSentence(params);
      setSentence(res.sentence);
    }
    fetchData();
  }, [params])

  return (
      <Paper>
        <Box p={6}>
        <Typography variant="h3" component="p">
          {sentence}
        </Typography>
      </Box>
      </Paper>
    
  );
};
