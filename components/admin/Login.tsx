import { useState, useContext } from "react";
import styles from "../../styles/AdminLogin.module.scss";
import supabase from "@/config/supabaseClient";
import { SigninContext } from "@/context/signin";
import { AiTwotoneHome } from "react-icons/ai";
import { Loader } from "../Loader";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { signInWithEmail, error, isLoading } = useContext(SigninContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    signInWithEmail({
      username,
      password,
    });
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
        {error && <p>{error}</p>}
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
            {isLoading ? (
              <>
                <Loader width={25} height={25} />
                <span>Signing In</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
