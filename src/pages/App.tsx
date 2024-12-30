import React from "react";
import { AppFullLayout } from "../components/AppFullLayout";
import { Link } from "react-router";

const TOPICS = ["grocery shopping", "flirting", "small talk", "getting around"];

function TopicSelect({
  topics,
  selectedTopic,
  onSelect,
}: {
  topics: string[];
  selectedTopic: string;
  onSelect: (topic: string) => void;
}) {
  return (
    <select
      className="appearance-none bg-slate-900 border border-transparent hover:border-gray-500 mx-2 p-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-white inline-block font-medium"
      onChange={(event) => onSelect(event.target.value)}
    >
      {topics.map((topic) => (
        <option key={topic} value={topic} selected={topic === selectedTopic}>
          {topic}
        </option>
      ))}
    </select>
  );
}

function GoButton({ topic }: { topic: string }) {
  return (
    <Link to={`/topic?topic=${encodeURIComponent(topic)}`}>
      <button className="bg-slate-50 hover:bg-blue-700 text-slate-900 font-bold py-2 px-4 rounded">
        Go →
      </button>
    </Link>
  );
}

function App() {
  const [topic, setTopic] = React.useState(TOPICS[0]);

  return (
    <AppFullLayout tabIndex={0}>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-thin flex flex-row items-center space-x-2 text-slate-200">
          <span>Learn</span>
          <span>vocabulary</span>
          <span>about</span>
          <TopicSelect
            topics={TOPICS}
            onSelect={setTopic}
            selectedTopic={topic}
          />
          <span>in</span>
          <span>German</span>
        </h1>
        <GoButton topic={topic} />
      </div>
    </AppFullLayout>
  );
}

export default App;
