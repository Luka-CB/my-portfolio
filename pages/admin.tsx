import { useContext } from "react";
import styles from "../styles/Admin.module.scss";
import supabase from "../config/supabaseClient";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import Form from "@/components/admin/Form";
import Login from "@/components/admin/Login";
import { SigninContext } from "@/context/signin";
import { useRouter } from "next/router";

const admin = () => {
  const { user, setUser } = useContext(SigninContext);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("portfolioAdmin");
    setUser({});
  };

  return (
    <div className={styles.container}>
      {!user?.id ? (
        <Login />
      ) : (
        <>
          <div className={styles.icons}>
            <div className={styles.backHome}>
              <AiTwotoneHome
                className={styles.homeIcon}
                title="Home Page"
                onClick={() => router.push("/")}
              />
            </div>
            <div
              className={styles.logout}
              title="Logout"
              onClick={handleLogout}
            >
              <RiLogoutCircleRFill className={styles.logoutIcon} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.col1}>
              <Form />
            </div>
            <div className={styles.col2}>
              <h1>Other Content</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default admin;
