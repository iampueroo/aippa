import { POSVerb } from "@ezl-types";
import React from "react";
import { AppFullLayout } from "../components/AppFullLayout";
import { VerbDisplay } from "../components/VerbDisplay";
import { useParams } from "react-router";
import { VerbMapping, VocabularyTopics } from "../data";

function useAppNavigation(verbs: POSVerb[]) {
  const [index, setIndex] = React.useState(0);
  const next = () => {
    if (index === verbs.length - 1) return;
    setIndex(index + 1);
  };
  const previous = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  const verb = verbs[index];
  return { verb, next, previous };
}

function PageWords() {
  const { topic } = useParams();
  const verbs: POSVerb[] = topic ? VerbMapping[topic as VocabularyTopics] : [];
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
    <AppFullLayout tabIndex={0} onKeyDown={onKeyDown}>
      <VerbDisplay {...verb} />
    </AppFullLayout>
  );
}

export default PageWords;
