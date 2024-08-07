import { useContext, useEffect } from "react";
import styles from "../styles/Demos.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Project from "@/components/Project";
import InfoModal from "@/components/InfoModal";
import { InfoModalContext } from "@/context/infoModal";
import { CodeLinkOptContext } from "@/context/codeLinkOptions";
import { projectDataIFace } from "@/context/project";
import { Loader } from "@/components/Loader";
import Carousel from "@/components/Carousel";
import { CarouselContext } from "@/context/carousel";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { prisma } from "../config/prisma";
import { AnimatePresence } from "framer-motion";

interface propsIFace {
  projects: projectDataIFace[];
}

const Demos: React.FC<propsIFace> = ({ projects }) => {
  const router = useRouter();

  const { isinfoModalOpen } = useContext(InfoModalContext);
  const { isCarouselOpen } = useContext(CarouselContext);
  const { setIsCodeBtnOptionOpen } = useContext(CodeLinkOptContext);

  useEffect(() => {
    if (isinfoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isinfoModalOpen]);

  return (
    <>
      <div className={styles.background}></div>
      <div
        className={styles.container}
        onClick={() => setIsCodeBtnOptionOpen(false)}
      >
        <Head>
          <title>Projects | {projects?.length}</title>
          <meta name="description" content="This is may portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AiTwotoneHome
          className="homeIcon"
          title="Home Page"
          onClick={() => router.push("/")}
        />
        <div className={styles.projects}>
          {false ? (
            <div className={styles.spinner}>
              <Loader />
            </div>
          ) : (
            <>
              {projects.map((project, i) => (
                <div className={styles.projectWrapper} key={project.id}>
                  <Project project={project} index={i} />
                </div>
              ))}
            </>
          )}
        </div>

        <AnimatePresence>
          {isinfoModalOpen ? <InfoModal /> : null}
        </AnimatePresence>
        {isCarouselOpen ? <Carousel /> : null}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.project.findMany();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
};

export default Demos;
