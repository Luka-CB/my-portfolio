import { useContext, useEffect } from "react";
import styles from "../styles/Admin.module.scss";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import Form from "@/components/admin/Form";
import Login from "@/components/admin/Login";
import { useRouter } from "next/router";
import { ProjectContext } from "@/context/project";
import Project from "@/components/admin/Project";
import { Loader } from "@/components/Loader";
import Head from "next/head";
import { prisma } from "../config/prisma";
import { projectDataIFace } from "@/context/project";
import { GetServerSideProps } from "next";
import UpdateForm from "@/components/admin/UpdateForm";
import { AuthContext } from "@/context/auth";

interface propsIface {
  projects: projectDataIFace[];
}

const Admin: React.FC<propsIface> = ({ projects }) => {
  const { isEditStateActive } = useContext(ProjectContext);
  const { isAdminActive, toggleAdmin } = useContext(AuthContext);

  const router = useRouter();

  const handleLogout = () => toggleAdmin(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin | Add Project</title>
        <meta name="description" content="This is may portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {!isAdminActive ? (
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
              {isEditStateActive ? <UpdateForm /> : <Form />}
            </div>
            <hr />
            <div className={styles.col2}>
              {true ? (
                <div className={styles.spinner}>
                  <Loader />
                </div>
              ) : (
                <>
                  {projects?.map((project, i) => (
                    <Project key={project.id} project={project} index={i} />
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

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.project.findMany();

  return {
    props: { projects: JSON.parse(JSON.stringify(projects)) },
  };
};

export default Admin;
