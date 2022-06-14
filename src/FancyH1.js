import React from "react";
import { useIdProviderContext } from "./id-provider-context";

export default function FancyH1({ children }) {
  const { getId } = useIdProviderContext();
  const id = getId(children);
  console.log(id);
  return (
    <h1 id={id}>
      <a href={`#${id}`}>{children}</a>
    </h1>
  );
}
