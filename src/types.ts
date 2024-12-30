type GenderDE = "masculine" | "feminine" | "neuter";

type POSBase = {
  lemma: string;
  shortEnglishTranslation: string;
};

export type POSVerb = POSBase & {
  partOfSpeech: "verb";
  pastParticiple: string;
  pastParticipleAuxiliaryVerb: string;
  isReflexive?: boolean;
  isSplittable?: boolean;
};

type POSNoun = POSBase & {
  partOfSpeech: "noun";
  gender: GenderDE;
};

export type Word = POSNoun | POSVerb;
