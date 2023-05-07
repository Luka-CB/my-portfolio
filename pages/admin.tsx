import { useContext, useEffect } from "react";
import styles from "../styles/Admin.module.scss";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import Form from "@/components/admin/Form";
import Login from "@/components/admin/Login";
import { SigninContext } from "@/context/signin";
import { useRouter } from "next/router";
import { ProjectContext } from "@/context/project";
import Project from "@/components/admin/Project";
import { Loader } from "@/components/Loader";
import Head from "next/head";

const Admin = () => {
  const { user, setUser } = useContext(SigninContext);
  const { getProjects, getProjectsLoading, projects } =
    useContext(ProjectContext);

  const router = useRouter();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  const handleLogout = () => {
    localStorage.removeItem("portfolioAdmin");
    setUser({});
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin | Add Project</title>
        <meta name="description" content="This is may portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
            <hr />
            <div className={styles.col2}>
              {getProjectsLoading ? (
                <div className={styles.spinner}>
                  <Loader />
                </div>
              ) : (
                <>
                  {projects?.map((project) => (
                    <Project key={project.id} project={project} />
                  ))}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
