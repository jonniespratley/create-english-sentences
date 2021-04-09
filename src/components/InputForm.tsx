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

function getObjects() {
  return ["Bear", "TV", "Toolbox", "Bed"].sort();
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
  type: {
    label: "Type of sentence",
    help: "The type of sentence structure",
  },
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
    help: "A time. (⏱, 🕰) ",
  },
  object: {
    label: "Give a object",
    help: "A thing. (🧸, 📺, 🧰, 🛏)",
  },
  submit: {
    label: 'Create'
  }
};

export interface InputData {
  id: string;
  subject?: string;
  type?: string;
  verb?: string;
  noun?: string;
  object?: string;
  tense?: string;
}

export interface InputFormProps {
  onSubmit?: (data: InputData) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [subject, setSubject] = React.useState("");
  const [type, setType] = React.useState("yesno");
  const [tense, setTense] = React.useState("");
  const [noun, setNoun] = React.useState("");
  const [verb, setVerb] = React.useState("");
  const [object, setObject] = React.useState("");

  let formData: InputData;

  const smSize = 3;
  const handleSubmit = (e) => {
    e.preventDefault();
    formData = {
      id: `${Date.now()}`,
      verb,
      type,
      tense,
      object,
      subject,
    };
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        {/* Sentence Type */}
        <Grid item xs={12}>
          <TextField
            id="type"
            label={formLabels.type.label}
            helperText={formLabels.type.help}
            value={type}
            onChange={(e) => setType(e.target.value)}
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

        {/* Sentence Subject / Noun */}
        <Grid item sm={smSize} xs={12}>
          <Autocomplete
            id="noun"
            freeSolo
            value={noun}
            onInputChange={(e, val) => setSubject(val)}
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
        {/* Sentence Verb */}
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

        {/* Sentence Object */}
        <Grid item sm={smSize} xs={12}>
        <Autocomplete
            id="object"
            freeSolo
            value={object}
            options={getObjects()}
            getOptionLabel={(option) => option}
            onInputChange={(e, val) => setObject(val)}
            fullWidth
            renderInput={(params) => (
              <TextField
                label={formLabels.object.label}
                helperText={formLabels.object.help}
                variant="outlined"
                {...params}
              />
            )}
          />
         
        </Grid>
        {/* Sentence Tense */}
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
            required
            variant="outlined"
          >
            {tenses.map((t) => (
              <MenuItem key={t.value} value={t.value}>
                {t.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined" type="submit">
            {formLabels.submit.label}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
