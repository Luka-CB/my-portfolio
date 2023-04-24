import { createContext, ReactNode, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface statesIface {
  isModalOpen: boolean;
  setIsModalOpen: any;
  isinfoModalOpen: boolean;
  setIsInfoModalOpen: any;
}

export const StateContext = createContext({} as statesIface);

const StatesProvider = ({ children }: childrenIFace) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isinfoModalOpen, setIsInfoModalOpen] = useState(false);

  const contextData = {
    isModalOpen,
    setIsModalOpen,
    isinfoModalOpen,
    setIsInfoModalOpen,
  };

  return (
    <StateContext.Provider value={contextData}>
      {children}
    </StateContext.Provider>
  );
};

export default StatesProvider;
