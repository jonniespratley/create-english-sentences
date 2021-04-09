import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { AppHeader, InputData, InputForm } from "./components";
import { ApiService } from "./services";
import { title, body } from "./data";

function SentenceList(props) {
  const saySentence = (item) => {
    const { sentence } = item;
    try {
      const synth = window.speechSynthesis;
      const speech = new SpeechSynthesisUtterance(sentence);
      synth.speak(speech);
    } catch (err) {
      console.error("saySentence", err);
    }
  };

  return (
    <List>
      {props.items &&
        props.items
          .sort((a, b) => parseInt(b.id) - parseInt(a.id))
          .map((item) => (
            <ListItem
              button
              key={item.id}
              divider
              onClick={() => {
                saySentence(item);
              }}
            >
              <ListItemText
                primary={item.sentence}
                primaryTypographyProps={{
                  variant: "h5",
                }}
              />
            </ListItem>
          ))}
    </List>
  );
}

/**
 * App Component handles rendering the InputForm and handling add item to
 * list of sentences to be created.
 * @returns
 */
export const App = () => {
  const [items, setItems] = React.useState<InputData[]>([]);

  const handleSubmit = async (data) => {
    const { sentence } = await ApiService.getSentence(data);
    const item = { ...data, sentence };
    setItems(items.concat(item));
  };


  return (
    <Box>
      <AppHeader />
      <Container>
        <Box my={4}>
          <Typography variant="h4">{title}</Typography>
          <p>{body}</p>
        </Box>
        <InputForm onSubmit={handleSubmit} />
        <Box mt={4}>
          <SentenceList items={items}/>
        </Box>
      </Container>
    </Box>
  );
};
