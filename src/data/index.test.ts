import { formLabels, getNouns, getObjects, getVerbs, sentenceTypes, tenses } from './index';

describe('data', () => {
    it('sentenceTypes are defined', () => {
        expect(sentenceTypes).toBeTruthy();
    });
    it('tenses are defined', () => {
        expect(tenses).toBeTruthy();
    });
    it('formLabels are defined', () => {
        expect(formLabels).toBeTruthy();
    });
    it('formLabels are defined', () => {
        expect(formLabels).toBeTruthy();
    });

    it('getObjects', () => {
        expect(getObjects).toBeDefined();
    });
    it('getNouns', () => {
        expect(getNouns).toBeDefined();
    });
    it('getVerbs', () => {
        expect(getVerbs).toBeDefined();
    });

    it('getVerbs returns array', () => {
        expect(getVerbs()).toBeTruthy();
    });
});
