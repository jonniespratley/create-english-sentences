import React from 'react';
import { Typography } from '@material-ui/core';

import { ApiService } from '../services';
import { InputData } from './InputForm';

interface SentenceOutputProps {
    params: InputData;
}
/**
 * SentenceOutput - This functional component uses hooks to fetch for the
 * new sentence when the params change.
 * @param params The set of params used to make a request to create a sentence.
 * @returns
 */
export const SentenceOutput: React.FC<SentenceOutputProps> = ({ params }) => {
    const [sentence, setSentence] = React.useState();
    React.useEffect(() => {
        async function fetchData() {
            const res = await ApiService.getSentence(params);
            setSentence(res.sentence);
        }
        fetchData();
    }, [params]);
    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <Typography variant="body2">{sentence}</Typography>
        </React.Suspense>
    );
};
