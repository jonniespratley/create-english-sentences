import React from "react";
import { Container } from "@material-ui/core";
import { AppHeader, InputForm, OutputForm } from "../components";

export const App = () => {
  let [data, setData] = React.useState(null);
  
  const handleSubmit = (e) => {
    //console.log('Generate sentance', e);
    setData(e);
  }

  React.useEffect(() => {
    console.log('form data change', data);
  }, [data])

  return (
    <div className="App">
      <AppHeader />
      <Container fixed>
        <InputForm onSubmit={handleSubmit}/>
        {data && <OutputForm params={data} />}
      </Container>
    </div>
  );
};
