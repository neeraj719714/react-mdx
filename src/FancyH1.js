import React from "react";

export default function FancyH1({ children, id = children }) {
  return (
    <h1 id={id}>
      <a href={`#${id}`}>{children}</a>
    </h1>
  );
}
