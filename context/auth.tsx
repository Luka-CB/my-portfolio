import { createContext, ReactNode, useEffect, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface statesIface {
  isAdminActive: boolean;
  toggleAdmin: (payload: boolean) => void;
}

export const AuthContext = createContext({} as statesIface);

const AuthProvider = ({ children }: childrenIFace) => {
  const [isAdminActive, setIsAdminActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdminActive")) {
      setIsAdminActive(JSON.parse(localStorage.getItem("isAdminActive") || ""));
    }
  }, []);

  const toggleAdmin = (payload: boolean) => {
    setIsAdminActive(payload);
    localStorage.setItem("isAdminActive", JSON.stringify(payload));
  };

  const contextData = {
    isAdminActive,
    toggleAdmin,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
