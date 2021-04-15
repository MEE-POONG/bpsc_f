import React, {cloneElement} from "react";

// import providers
import {CounterProvider} from "./CounterProvider";
import {UsersProvider} from "./UsersProvider";
import {ResultsProvider} from "./ResultsProvider";
import {ResultsErrorProvider} from "./ResultsErrorProvider";
import {RolesProvider} from "./RolesProvider";
import {NavigatorProvider} from "./NavigatorProvider";

function ProviderComposer({contexts, children}) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}
export default function ContextProvider({children}) {
  return (
    <ProviderComposer
      // add providers to array of contexts
      contexts={[
        <CounterProvider />,
        <UsersProvider />,
        <ResultsProvider />,
        <ResultsErrorProvider />,
        <RolesProvider />,
        <NavigatorProvider />,
      ]}
    >
      {children}
    </ProviderComposer>
  );
}
