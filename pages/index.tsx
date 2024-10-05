import { useEffect, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Main.module.scss";
import MainScreen from "../components/main/MainScreen";
import useWindowWidth from "@/hooks/windowWidth";
import { projectDataIFace } from "@/context/project";
import { GetServerSideProps } from "next";
import { prisma } from "@/config/prisma";
import { InfoModalContext } from "@/context/infoModal";
import { CarouselContext } from "@/context/carousel";
import { CodeLinkOptContext } from "@/context/codeLinkOptions";
import { AnimatePresence } from "framer-motion";
import InfoModal from "@/components/InfoModal";
import Carousel from "@/components/Carousel";

interface propsIFace {
  projects: projectDataIFace[];
}

const Home: React.FC<propsIFace> = ({ projects }) => {
  const windowWidth = useWindowWidth();

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
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="This is may portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={styles.container}
        onClick={() => setIsCodeBtnOptionOpen(false)}
      >
        <div className={styles.overlay}></div>

        <MainScreen projects={projects} />
      </main>

      <AnimatePresence>
        {isinfoModalOpen ? <InfoModal /> : null}
      </AnimatePresence>
      {isCarouselOpen ? <Carousel /> : null}
    </div>
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

export default Home;
