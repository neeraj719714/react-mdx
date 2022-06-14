import React from "react";
import IdProviderContext from "./id-provider-context";

const MAX_LETTER_COUNT = 18;

const isAlphaNumeric = (str) => {
  return /^[a-z0-9]+$/i.test(str);
};

const IdProvider = (props) => {
  const IdMap = {};
  const getTrimmedId = (heading) => {
    const words = heading.split(" ");
    let id = "",
      idx = 0;
    while (idx < words.length && id.length < MAX_LETTER_COUNT) {
        const word = words[idx].toLowerCase();
        console.log("inside while loop-->", word, isAlphaNumeric(word));
      if (!isAlphaNumeric(word)) {
        idx++;
        continue;
      }

      if (id) id += "-";
      id += word;
      idx++;
    }
    return id;
  };
  const getId = (heading) => {
    const id = getTrimmedId(heading);
    if (!IdMap[id]) {
      IdMap[id] = 1;
      return id;
    }
    return `${id}-${IdMap[id]++}`;
  };
  return (
    <IdProviderContext.Provider value={{ getId }}>
      {props.children}
    </IdProviderContext.Provider>
  );
};

export default IdProvider;
