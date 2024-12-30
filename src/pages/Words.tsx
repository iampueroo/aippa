import { POSVerb } from "@ezl-types";
import React from "react";
import { AppFullLayout } from "../components/AppFullLayout";
import { VerbDisplay } from "../components/VerbDisplay";
import { verbs } from "../data";

function useAppNavigation(verbs: POSVerb[]) {
  const [index, setIndex] = React.useState(0);
  const next = () => setIndex((index + 1) % verbs.length);
  const previous = () => setIndex((index - 1 + verbs.length) % verbs.length);
  const verb = verbs[index];
  return { verb, next, previous };
}

function Words() {
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

export default Words;
