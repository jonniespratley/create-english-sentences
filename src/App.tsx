import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';
import { InputForm, SentenceList } from './components';
import { InputData } from './Props';
import { ApiService } from './services';
import { title, body } from './data';

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
            <AppBar position="sticky" color="inherit">
                <Toolbar variant="dense">
                    <Typography variant="h6">🇺🇸</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Box my={4}>
                    <Typography variant="h4">{title}</Typography>
                    <p>{body}</p>
                </Box>
                <InputForm onSubmit={handleSubmit} />
                <Box mt={4}>
                    <SentenceList items={items} />
                </Box>
            </Container>
        </Box>
    );
};
