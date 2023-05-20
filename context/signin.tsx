import { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

interface childrenIFace {
  children: ReactNode;
}

interface signinDataIFace {
  username: string;
  password: string;
}

interface returnedUserIFace {
  id: string;
  username: string;
}

interface signinIface {
  signIn: (signinData: signinDataIFace) => void;
  resetLogin: () => void;
  user: returnedUserIFace;
  setUser: any;
  error: string;
  isLoading: boolean;
}

export const SigninContext = createContext({} as signinIface);

const SigninProvider = ({ children }: childrenIFace) => {
  const [user, setUser] = useState({} as returnedUserIFace);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("portfolioAdmin")) {
      setUser(JSON.parse(localStorage.getItem("portfolioAdmin") || ""));
    }
  }, []);

  const resetLogin = () => {
    setIsLoading(false);
    setError("");
  };

  const signIn = async (signinData: signinDataIFace) => {
    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/login", signinData, {
        headers: { "Content-Type": "application/json" },
      });

      if (data) {
        setIsLoading(false);
        setUser(data);
        localStorage.setItem("portfolioAdmin", JSON.stringify(data));
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      const errMsg = error.response ? error.response.data.msg : error.message;
      setError(errMsg);
    }
  };

  const contextData = {
    signIn,
    user,
    setUser,
    error,
    isLoading,
    resetLogin,
  };

  return (
    <SigninContext.Provider value={contextData}>
      {children}
    </SigninContext.Provider>
  );
};

export default SigninProvider;
