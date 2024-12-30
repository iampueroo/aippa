import { POSVerb } from "@ezl-types";
import React, { useEffect } from "react";
import { AppFullLayout } from "../components/AppFullLayout";
import { VerbDisplay } from "../components/VerbDisplay";
import { useParams } from "react-router";
import { VerbMapping, VocabularyTopics } from "../data";

function useAppNavigation(verbs: POSVerb[]) {
  const [index, setIndex] = React.useState(0);
  const next = () => {
    setIndex((prevIndex) => {
      if (prevIndex === verbs.length - 1) return prevIndex;
      return prevIndex + 1;
    });
  };
  const previous = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) return prevIndex;
      return prevIndex - 1;
    });
  };
  const verb = verbs[index];
  return { verb, next, previous };
}

function PageWords() {
  const { topic } = useParams();
  const verbs: POSVerb[] = topic ? VerbMapping[topic as VocabularyTopics] : [];
  const { verb, next, previous } = useAppNavigation(verbs);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          next();
          break;
        case "ArrowLeft":
          previous();
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <AppFullLayout>
      <VerbDisplay {...verb} />
    </AppFullLayout>
  );
}

export default PageWords;
