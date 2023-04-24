import { createContext, ReactNode, useState, useEffect } from "react";
import supabase from "@/config/supabaseClient";

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
  signInWithEmail: (signinData: signinDataIFace) => void;
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

  const signInWithEmail = async (signinData: signinDataIFace) => {
    setIsLoading(true);

    const { data, error } = await supabase
      .from("user")
      .select("id, username")
      .eq("username", signinData.username)
      .eq("password", signinData.password)
      .single();

    if (error) {
      setIsLoading(false);
      setError("Username or Password is Incorrect!");
    }

    if (data) {
      setIsLoading(false);
      setUser(data);
      localStorage.setItem("portfolioAdmin", JSON.stringify(data));
    }
  };

  const contextData = {
    signInWithEmail,
    user,
    setUser,
    error,
    isLoading,
  };

  return (
    <SigninContext.Provider value={contextData}>
      {children}
    </SigninContext.Provider>
  );
};

export default SigninProvider;
