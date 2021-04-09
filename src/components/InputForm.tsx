import React from "react";
import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab'

import {actionVerbs} from './sentenceData';

import verbsData from '../data/verbs.json';
import nounsData from '../data/nouns.json';


function getNouns() {
  const {nouns} = nounsData;
  return nouns;
}
function getVerbs() {
  const {verbs} = verbsData;
  return verbs.map(v => v.present);
}

const sentenceTypes = [
  { label: "Simple", value: "1" },
  { label: "Compound", value: "2" },
  { label: "Complex", value: "3" },
];

const tenses = [
  { label: "Past", value: "past" },
  { label: "Present", value: "present" },
  { label: "Future", value: "future" },
];

const formLabels = {
  noun: {
    label: "Give a subject",
    help: "A noun. (👶🏻, 👮🏽‍♀️, 👩, 🏖,)",
  },
  verb: {
    label: "Give a verb",
    help:
      "An action, state. (🏊🏼‍♂️ 🚣🏽 🚴🏽‍♀️ 🚗  🚀)",
  },
  tense: {
    label: "Give a tense",
    help: "A thing that occurred at a specific time. (past, present, future) 🌝 🌤 🌑",
  },
};

interface InputData {
  subject?: string;
  verb?: string;
  noun?: string;
  object?: string;
  tense?: string;
}

interface InputFormProps {
  onSubmit?: (data: any) => void;
  data?: InputData;
}

export const InputForm: React.FC<InputFormProps> = ({
  onSubmit
}) => {

  const [subject, setSubject] = React.useState(null)
  const [tense, setTense] = React.useState('');
  const [noun, setNoun] = React.useState('');
  const [verb, setVerb] = React.useState('');

  let formData:InputData;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    formData = { verb, tense, ...{subject: noun} }
    
    if(onSubmit){
      onSubmit(formData);
    }
  }

    const smSize = 3;
  return (
    <Box my={2} p={2}>
      <Typography variant="h3">Learn English Sentences</Typography>
      <p>Use the form below to construct a new sentance.</p>
      <br />
      <form
        onSubmit={handleSubmit}
      >
        <Grid container spacing={4}>
        <Grid item sm={smSize} xs>
            <TextField
              id="input1"
              label="Sentence type"
              variant="outlined"
              fullWidth
              select
              
            >
               {sentenceTypes.map((t) => (
                <MenuItem key={t.value} value={t.value}>
                  {t.label}
                </MenuItem>
              ))}

            </TextField>

          </Grid>
          <Grid item sm={smSize}>
            <Autocomplete
              id="noun"
              freeSolo   
              value={noun}
              onInputChange={(e, val) => setNoun(val)}
              options={getNouns()}
              getOptionLabel={(option) => option}
              fullWidth
              renderInput={(params) =>  <TextField
                label={formLabels.noun.label}
                helperText={formLabels.noun.help}
                variant="outlined"
                {...params}
              />}
            />
          </Grid>
          <Grid item sm={smSize}>
          <Autocomplete
              id="verb" 
              freeSolo
              value={verb}
              options={getVerbs()}
              getOptionLabel={(option) => option}
              onInputChange={(e, val) => setVerb(val)}
              fullWidth
              renderInput={(params) =>  <TextField
                label={formLabels.verb.label}
                helperText={formLabels.verb.help}
                variant="outlined"
                {...params}
              />}
            />
    
          </Grid>
          <Grid item sm={smSize} xs>
            <TextField
              id="tense"
              value={tense}
              defaultValue="past"
              onChange={(e) => setTense(e.target.value)}
              label={formLabels.tense.label}
              helperText={formLabels.tense.help}
              InputLabelProps={{ shrink: true }}
              
              select
              fullWidth
              variant="outlined"
            >
              {tenses.map((t) => (
                <MenuItem key={t.value} value={t.value}>
                  {t.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Button variant="outlined" type="submit">
              {" "}
              Generate Sentence
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
