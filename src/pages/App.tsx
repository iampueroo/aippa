import React from "react";
import { AppFullLayout } from "../components/AppFullLayout";
import { Link } from "react-router";
import { VerbMapping, VocabularyTopics } from "../data";

type TopicOptions = VocabularyTopics | "custom";

function TopicSelect({
  topics,
  selectedTopic,
  onSelect,
}: {
  topics: string[];
  selectedTopic: TopicOptions;
  onSelect: (topic: TopicOptions) => void;
}) {
  return (
    <select
      className="appearance-none bg-slate-900 border border-transparent hover:border-gray-500 mx-2 p-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white inline-block font-medium underline decoration-2"
      onChange={(event) => onSelect(event.target.value as TopicOptions)}
      value={selectedTopic}
    >
      {topics.map((topic) => (
        <option key={topic} value={topic}>
          {topic}
        </option>
      ))}
    </select>
  );
}

function InputField({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <input
      className="appearance-none bg-slate-900 border hover:border-gray-500 mx-2 p-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white inline-block font-medium ne decoration-2 w-auto min-w-2"
      type="text"
      autoFocus
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

function GoButton({ topic, isCustom }: { topic: string; isCustom: boolean }) {
  return (
    <Link to={`/${isCustom ? "custom" : "topic"}/${encodeURIComponent(topic)}`}>
      <button
        className="bg-slate-50  text-slate-900 font-bold py-2 px-4 rounded"
        disabled={isCustom && !topic}
      >
        Go →
      </button>
    </Link>
  );
}

function App() {
  const topics = [
    ...(Object.keys(VerbMapping) as TopicOptions[]),
    "custom" as const,
  ];
  const [topic, setTopic] = React.useState<TopicOptions>(topics[0]);
  const [customTopic, setCustomTopic] = React.useState<string>("");
  const isCustomTopic = topic === "custom";

  return (
    <AppFullLayout tabIndex={0}>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-thin flex flex-row items-center space-x-2 text-slate-200">
          <span>Explore</span>
          <span>vocabulary</span>
          <span>about</span>
          {topic === "custom" ? (
            <InputField value={customTopic} setValue={setCustomTopic} />
          ) : (
            <TopicSelect
              topics={topics}
              onSelect={setTopic}
              selectedTopic={topic}
            />
          )}
          <span>in</span>
          <span>German</span>
        </h1>
        <GoButton
          topic={isCustomTopic ? customTopic : topic}
          isCustom={isCustomTopic}
        />
      </div>
    </AppFullLayout>
  );
}

export default App;
