import React from "react";
import { POSVerb } from "./types";
import { verbs } from "./data";
import { VerbDisplay } from "./components/VerbDisplay";

function useAppNavigation(verbs: POSVerb[]) {
  const [index, setIndex] = React.useState(0);
  const next = () => setIndex((index + 1) % verbs.length);
  const previous = () => setIndex((index - 1 + verbs.length) % verbs.length);
  const verb = verbs[index];
  return { verb, next, previous };
}

function App() {
  const { verb, next, previous } = useAppNavigation(verbs);
  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowRight":
        next();
        break;
      case "ArrowLeft":
        previous();
        break;
    }
  };

  return (
    <div
      className="h-full flex justify-center items-center bg-slate-900 text-white"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <VerbDisplay {...verb} />
    </div>
  );
}

export default App;
