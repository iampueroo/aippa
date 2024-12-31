type GenderDE = "masculine" | "feminine" | "neuter";

type POSBase = {
  lemma: String;
  shortEnglishTranslation: String;
};

export type POSVerb = POSBase & {
  partOfSpeech: "verb";
  isReflexive?: boolean;
};

type POSNoun = POSBase & {
  partOfSpeech: "noun";
  gender: GenderDE;
};

export type Word = POSNoun | POSVerb;
