import { POSVerb } from "@ezl-types";
import { Pill } from "./Pill";

export function VerbDisplay(word: POSVerb) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <h3 className="text-3xl font-extralight italic">
        {word.shortEnglishTranslation}
      </h3>
      <h1 className="text-7xl font-semibold">{word.lemma}</h1>
      <h3 className="text-2xl font-extralight pb-3 pt-3">
        <span className="italic">{word.pastParticipleAuxiliaryVerb}</span>{" "}
        <span>{word.pastParticiple}</span>
      </h3>
      <div className="flex space-x-1">
        {word.isSplittable && <Pill label="splittable" />}
        {word.isReflexive && <Pill label="reflexive" />}
      </div>
    </div>
  );
}
