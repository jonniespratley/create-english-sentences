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
import { Autocomplete } from "@material-ui/lab";

import { actionVerbs } from "./sentenceData";

import verbsData from "../data/verbs.json";
import nounsData from "../data/nouns.json";

function getNouns() {
  const { nouns } = nounsData;
  return nouns;
}
function getVerbs() {
  const { verbs } = verbsData;
  return verbs.map((v) => v.present);
}

const sentenceTypes = [
  { label: "Yes / No", value: "yesno" },
  { label: "What object?", value: "whatobj" },
  { label: "Who subject?", value: "whosubj" },
];

const tenses = [
  { label: "Past", value: "past" },
  { label: "Present", value: "present" },
  { label: "Future", value: "future" },
];

const formLabels = {
  noun: {
    label: "Give a subject",
    help: "A noun. (👶🏻, 👮🏽‍♀️, 👩, 🏖)",
  },
  verb: {
    label: "Give an action",
    help: "A verb. (🏊🏼‍♂️, 🚣🏽, 🚴🏽‍♀️, 🚀)",
  },
  tense: {
    label: "Give a tense",
    help: "A specific time.",
  },
  object: {
    label: "Give a object",
    help: "A thing. (Ball, Car, Building)",
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

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [subject, setSubject] = React.useState(null);
  const [tense, setTense] = React.useState("");
  const [noun, setNoun] = React.useState("");
  const [verb, setVerb] = React.useState("");
  const [object, setObject] = React.useState("");

  let formData: InputData;

  const handleSubmit = (e) => {
    e.preventDefault();

    formData = { verb, tense, ...{ subject: noun } };

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const smSize = 3;
  return (
    <Box my={2} p={2}>
      <Typography variant="h4">English Sentences</Typography>
      <p>Use the form below to construct a sentence.</p>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
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
          <Grid item sm={smSize} xs={12}>
            <Autocomplete
              id="noun"
              freeSolo
              value={noun}
              onInputChange={(e, val) => setNoun(val)}
              options={getNouns()}
              getOptionLabel={(option) => option}
              fullWidth
              renderInput={(params) => (
                <TextField
                  label={formLabels.noun.label}
                  helperText={formLabels.noun.help}
                  variant="outlined"
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item sm={smSize} xs={12}>
            <Autocomplete
              id="verb"
              freeSolo
              value={verb}
              options={getVerbs()}
              getOptionLabel={(option) => option}
              onInputChange={(e, val) => setVerb(val)}
              fullWidth
              renderInput={(params) => (
                <TextField
                  label={formLabels.verb.label}
                  helperText={formLabels.verb.help}
                  variant="outlined"
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item sm={smSize} xs={12}>
            <TextField
              id="tense"
              value={tense}
              defaultValue="past"
              onChange={(e) => setTense(e.target.value)}
              label={formLabels.tense.label}
              helperText={formLabels.tense.help}
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

          <Grid item sm={smSize} xs={12}>
            <TextField
              id="object"
              label={formLabels.object.label}
              helperText={formLabels.object.help}
              value={object}
              fullWidth
              variant="outlined"
              onChange={(e) => setObject(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
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
