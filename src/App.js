import React from "react";
import Document from "./test.mdx";
// import Document2 from "./test2.mdx";
import FancyH1 from "./FancyH1";

const IdMap = {};
const getTrimmedId = (heading) => {
  const words = heading.split(" ");
  let id = "",
    idx = 0;
  while (idx < words.length && id.length < MAX_LETTER_COUNT) {
      const word = words[idx].toLowerCase();
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

export default function App() {
  const [showDocument, setShowDocument] = React.useState(true);
  const toggleDocument = () => {
    setShowDocument(!showDocument);
  };
  return (
    <div>
      {/* <button onClick={toggleDocument}>Toggle Document</button> */}
      {/* {showDocument ? ( */}
        <Document
          components={{
            h1: (props) => {
              console.log("props", props);
              return <FancyH1 {...props} />;
            },
          }}
        />
      {/* ) : ( */}
        {/* <Document2 components={{ h1: FancyH1 }} /> */}
      {/* )} */}
    </div>
  );
}
