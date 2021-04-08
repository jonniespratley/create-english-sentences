import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useFetch } from "../hooks";

interface OutputFormProps {
  sentence?: string;
}

const SentanceFetch = (props) => {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  if (!res.response) {
    return <div>Loading...</div>;
  }

  return <div>{res.response}</div>;
};

export const OutputForm: React.FC<OutputFormProps> = ({ sentence }) => {
  return (
    <div>
      <Box>
        <Typography variant="h4">Output</Typography>
      </Box>
    </div>
  );
};
