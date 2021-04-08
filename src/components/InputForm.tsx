import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";

const tenses = [
  { label: "Past", value: "past" },
  { label: "Present", value: "present" },
  { label: "Future", value: "future" }
];

interface InputData {
  subject?: string;
  verb?: string;
  object?: string;
  tense?: string;
}

interface InputFormProps {
  onSubmit?: (data: any) => void;
  data?: InputData;
}

export const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  data = {}
}) => {
  const [formData, setFormData] = React.useState(data);
  const [subject, setSubject] = React.useState("");

  return (
    <Box my={2} p={2}>
      <Typography variant="h3">Input</Typography>
      <p>Use the form below to construct a new sentance.</p>
      <br />
      <form
        onSubmit={(e) => {
          console.log("Submit", e);
          //onSubmit(e)
        }}
      >
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <TextField
              id="input1"
              label="Subject"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField id="input1" label="Verb" fullWidth variant="outlined" />
          </Grid>
          <Grid item>
            <TextField
              id="input1"
              label="Tense"
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
