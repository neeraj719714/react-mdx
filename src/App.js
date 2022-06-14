import React from "react";
import Document from "./test.mdx";
import Document2 from "./test2.mdx";
import FancyH1 from "./FancyH1";
import IdProvider from "./IDProvider";

export default function App() {
  const [showDocument, setShowDocument] = React.useState(true);
  const toggleDocument = () => {
    setShowDocument(!showDocument);
  };
  return (
    <div>
      <button onClick={toggleDocument}>Toggle Document</button>
      {showDocument ? (
        <IdProvider>
          <Document components={{ h1: FancyH1 }} />
        </IdProvider>
      ) : (
        <IdProvider>
          <Document2 components={{ h1: FancyH1 }} />
        </IdProvider>
      )}
    </div>
  );
}
