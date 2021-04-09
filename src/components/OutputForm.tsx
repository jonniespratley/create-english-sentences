import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";

import { ApiService } from "../services";

interface OutputFormProps {
  sentence?: string;
  params?: any;
}

export const OutputForm: React.FC<OutputFormProps> = ({ params }) => {
  const [sentence, setSentence] = React.useState();
  React.useEffect(() => {
    async function fetchData() {
      let res = await ApiService.getSentence(params);
      setSentence(res.sentence);
    }
    fetchData();
  }, [params]);

  return (    
        <React.Suspense fallback={<p>Loading...</p>}>
          <Typography variant="body1">
          {sentence}
        </Typography>
        </React.Suspense>
  );
};
