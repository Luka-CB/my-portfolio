import { useContext, useEffect } from "react";
import styles from "../styles/Demos.module.scss";
import { AiTwotoneHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Project from "@/components/Project";
import InfoModal from "@/components/InfoModal";
import { InfoModalContext } from "@/context/infoModal";
import { CodeLinkOptContext } from "@/context/codeLinkOptions";
import { ProjectContext } from "@/context/project";
import { Loader } from "@/components/Loader";
import Carousel from "@/components/Carousel";
import { CarouselContext } from "@/context/carousel";

const Demos = () => {
  const router = useRouter();

  const { isinfoModalOpen } = useContext(InfoModalContext);
  const { isCarouselOpen } = useContext(CarouselContext);
  const { projects, getProjects, getProjectsLoading } =
    useContext(ProjectContext);
  const { isCodeBtnOptionOpen, setIsCodeBtnOptionOpen, projectIndex } =
    useContext(CodeLinkOptContext);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div
      className={
        isinfoModalOpen ? styles.container : styles.containerWithScroll
      }
      onClick={() => setIsCodeBtnOptionOpen(false)}
    >
      <AiTwotoneHome
        className="homeIcon"
        title="Home Page"
        onClick={() => router.push("/")}
      />
      <div className={styles.projects}>
        {getProjectsLoading ? (
          <div className={styles.spinner}>
            <Loader />
          </div>
        ) : (
          <>
            {projects.map((project, i) => (
              <div className={styles.projectWrapper} key={project.id}>
                <Project project={project} index={i} />
                {isCodeBtnOptionOpen && i === projectIndex ? (
                  <div className={styles.options}>
                    <a
                      href={project.frontendUrl}
                      target="_blank"
                      className={styles.link}
                    >
                      frontend
                    </a>
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      className={styles.link}
                    >
                      backend
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </>
        )}
      </div>

      {isinfoModalOpen ? <InfoModal /> : null}
      {isCarouselOpen ? <Carousel /> : null}
    </div>
  );
};

export default Demos;
