import { useContext, useEffect, useState } from "react";
import styles from "../../styles/AdminLogin.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { toggleAdmin } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    let timeOut: number;

    if (errorMsg) {
      timeOut = window.setTimeout(() => {
        setErrorMsg("");
      }, 1500);
    }

    return () => clearTimeout(timeOut);
  }, [errorMsg]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const storedUsername = process.env.NEXT_PUBLIC_USERNAME;
    const storedPassword = process.env.NEXT_PUBLIC_PASSWORD;

    if (storedUsername !== username) {
      setErrorMsg("Incorrect Username!");
      return;
    }

    if (storedPassword !== password) {
      setErrorMsg("Incorrect Password!");
      return;
    }

    toggleAdmin(true);
  };

  return (
    <>
      <AiTwotoneHome
        className="homeIcon"
        title="Home Page"
        onClick={() => router.push("/")}
      />
      <div className={styles.container}>
        <h1>Sign In to Use App</h1>
        {errorMsg ? <p className={styles.errMsg}>{errorMsg}</p> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            <span>Sign In</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
