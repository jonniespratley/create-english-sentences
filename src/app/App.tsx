import React from "react";
import { Container } from "@material-ui/core";
import { AppHeader, InputForm, OutputForm } from "../components";

export const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Container fixed>
        <InputForm />
        <OutputForm />
      </Container>
    </div>
  );
};
