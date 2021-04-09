import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";

import { ApiService } from "../services";

interface OutputFormProps {
  sentence?: string;
  params?: any;
}

let api = new ApiService();

export const OutputForm: React.FC<OutputFormProps> = ({ params }) => {
  const [sentence, setSentence] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      let res = await api.getSentence(params);
      setSentence(res.sentence);
    }
    fetchData();
  }, [params]);

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
