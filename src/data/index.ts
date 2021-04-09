import { actionVerbs } from "./sentenceData";
import verbsData from "./verbs.json";
import nounsData from "./nouns.json";

export const title = 'Form Proper Sentence';
export const body = 'Use the form below to construct a proper sentence.'

export function getNouns() {
  const { nouns } = nounsData;
  return nouns;
}

export function getVerbs() {
  const { verbs } = verbsData;
  return verbs.map((v) => v.present);
}

export function getObjects() {
  return ["Bear", "TV", "Toolbox", "Bed"].sort();
}

export const sentenceTypes = [
  { label: "Yes / No", value: "yesno" },
  { label: "What object?", value: "whatobj" },
  { label: "Who subject?", value: "whosubj" },
];

export const tenses = [
  { label: "Past", value: "past" },
  { label: "Present", value: "present" },
  { label: "Future", value: "future" },
];

export const formLabels = {
  type: {
    label: "Type of sentence",
    help: "The type of sentence structure",
  },
  noun: {
    label: "Give a subject",
    help: "A noun. (👶🏻, 👮🏽‍♀️, 👩, 🏖)",
  },
  verb: {
    label: "Give an action",
    help: "A verb. (🏊🏼‍♂️, 🚣🏽, 🚴🏽‍♀️, 🚀)",
  },
  tense: {
    label: "Give a tense",
    help: "A time. (⏱, 🕰) ",
  },
  object: {
    label: "Give a object",
    help: "A thing. (🧸, 📺, 🧰, 🛏)",
  },
  submit: {
    label: 'Create'
  }
};