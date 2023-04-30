import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface codeLinkOptIface {
  projectIndex: number | null;
  setProjectIndex: any;
  isCodeBtnOptionOpen: boolean;
  setIsCodeBtnOptionOpen: any;
}

export const CodeLinkOptContext = createContext({} as codeLinkOptIface);

const CodeLinkOptProvider = ({ children }: childrenIFace) => {
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const [isCodeBtnOptionOpen, setIsCodeBtnOptionOpen] = useState(false);

  const contextData = {
    projectIndex,
    setProjectIndex,
    isCodeBtnOptionOpen,
    setIsCodeBtnOptionOpen,
  };

  return (
    <CodeLinkOptContext.Provider value={contextData}>
      {children}
    </CodeLinkOptContext.Provider>
  );
};

export default CodeLinkOptProvider;
