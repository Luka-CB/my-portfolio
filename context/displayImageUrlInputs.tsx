import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface childrenIFace {
  children: ReactNode;
}

interface imageUrlsIFace {
  id: string;
  url: string;
}

interface DisplayImageUrlInputsIface {
  imageUrls: imageUrlsIFace[];
  setImageUrls: any;
}

export const DisplayImageUrlInputsContext = createContext(
  {} as DisplayImageUrlInputsIface
);

const DisplayImageUrlInputsProvider = ({ children }: childrenIFace) => {
  const [imageUrls, setImageUrls] = useState<imageUrlsIFace[]>([
    {
      id: uuidv4(),
      url: "",
    },
  ]);

  const contextData = {
    imageUrls,
    setImageUrls,
  };

  return (
    <DisplayImageUrlInputsContext.Provider value={contextData}>
      {children}
    </DisplayImageUrlInputsContext.Provider>
  );
};

export default DisplayImageUrlInputsProvider;
