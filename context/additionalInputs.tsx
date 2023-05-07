import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface childrenIFace {
  children: ReactNode;
}

interface screenshotUrlsIFace {
  id: string;
  screenshotUrlCount: number;
  screenshotUrl: string;
}

interface additionalInputIFace {
  id: string;
  additionalInputCount: number;
  description: string;
  screenshotUrls: screenshotUrlsIFace[];
}

interface additionalInputsIface {
  setAdditionalInputs: any;
  additionalInputs: additionalInputIFace[];
}

export const AdditionalInputsContext = createContext(
  {} as additionalInputsIface
);

const AdditionalInputsProvider = ({ children }: childrenIFace) => {
  const [additionalInputs, setAdditionalInputs] = useState<
    additionalInputIFace[]
  >([
    {
      id: uuidv4(),
      additionalInputCount: 1,
      description: "",
      screenshotUrls: [
        {
          id: uuidv4(),
          screenshotUrlCount: 1,
          screenshotUrl: "",
        },
      ],
    },
  ]);

  const contextData = {
    additionalInputs,
    setAdditionalInputs,
  };

  return (
    <AdditionalInputsContext.Provider value={contextData}>
      {children}
    </AdditionalInputsContext.Provider>
  );
};

export default AdditionalInputsProvider;
