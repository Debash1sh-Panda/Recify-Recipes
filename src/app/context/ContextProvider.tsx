"use client";

import { createContext, useState } from "react";

type ContextType={
    hideMessage:boolean;
    setHideMessage:React.Dispatch<React.SetStateAction<boolean>>
}
export const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }: {children: React.ReactElement}) {
  const [hideMessage, setHideMessage] = useState<boolean>(false);

  return <Context.Provider value={{ hideMessage, setHideMessage }}>{children}</Context.Provider>;
}

export default ContextProvider;
