import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface pickedInfoIFace {
  id: string;
  name: string;
  description: string;
  displayImage: string;
  screenshots: [
    {
      id: string;
      description: string;
      screenshot: string;
    }
  ];
}

interface infoModalIface {
  isinfoModalOpen: boolean;
  setIsInfoModalOpen: any;
  pickedInfo: pickedInfoIFace;
  setPickedInfo: any;
}

export const InfoModalContext = createContext({} as infoModalIface);

const InfoModalProvider = ({ children }: childrenIFace) => {
  const [isinfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [pickedInfo, setPickedInfo] = useState({} as pickedInfoIFace);

  const contextData = {
    isinfoModalOpen,
    setIsInfoModalOpen,
    pickedInfo,
    setPickedInfo,
  };

  return (
    <InfoModalContext.Provider value={contextData}>
      {children}
    </InfoModalContext.Provider>
  );
};

export default InfoModalProvider;
