import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export const saySentence = (item) => {
    const { sentence } = item;
    try {
        const synth = window.speechSynthesis;
        const speech = new SpeechSynthesisUtterance(sentence);
        synth.speak(speech);
    } catch (err) {
        console.error('saySentence', err);
    }
};

export const SentenceList = (props) => {
    return (
        <List>
            {props.items &&
                props.items
                    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
                    .map((item) => (
                        <ListItem button key={item.id} divider onClick={() => saySentence(item)}>
                            <ListItemText
                                primary={item.sentence}
                                primaryTypographyProps={{
                                    variant: 'h5'
                                }}
                            />
                        </ListItem>
                    ))}
        </List>
    );
};
