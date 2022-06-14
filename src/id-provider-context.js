import React, { useContext } from "react";

const IdProviderContext = React.createContext();

const useIdProviderContext = () => {
  const idProviderContext = useContext(IdProviderContext);
  if (!idProviderContext) {
    throw new Error(
      "useIdProviderContext must be used within a IdProviderContext"
    );
  }
  return idProviderContext;
};

export default IdProviderContext;
export { useIdProviderContext };
