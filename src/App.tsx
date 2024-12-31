import { POSVerb } from "./types";

function Pill({ label }: { label: string }) {
  // Generates a pill with the given label
  return (
    <span className="bg-slate-700 text-white rounded-full px-2 py-1 text-sm">
      {label[0].toUpperCase() + label.slice(1)}
    </span>
  );
}

function VerbDisplay(word: POSVerb) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <h3 className="text-3xl font-extralight italic">
        {word.shortEnglishTranslation}
      </h3>
      <h1 className="text-7xl font-semibold pb-2">{word.lemma}</h1>
      <Pill label={word.partOfSpeech} />
    </div>
  );
}

function App() {
  const verb: POSVerb = {
    partOfSpeech: "verb",
    lemma: "haben",
    shortEnglishTranslation: "to have",
  };
  return (
    <div className="h-full flex justify-center items-center bg-slate-900 text-white">
      <VerbDisplay {...verb} />
    </div>
  );
}

export default App;
