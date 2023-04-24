import Image from "next/image";
import { useContext } from "react";
import styles from "../styles/Demos.module.scss";
import { VscOpenPreview, VscCode, VscInfo } from "react-icons/vsc";
import { InfoModalContext } from "@/context/infoModal";

interface propsIFace {
  project: {
    id: string;
    name: string;
    description: string;
    displayImage: string;
    screenshots: {
      id: string;
      description: string;
      screenshot: string;
    }[];
  };
}

const Projects: React.FC<propsIFace> = ({ project }) => {
  const { setIsInfoModalOpen, setPickedInfo } = useContext(InfoModalContext);

  const handleModalOpen = () => {
    setIsInfoModalOpen(true);
    setPickedInfo(project);
  };

  return (
    <div className={styles.project}>
      <div className={styles.displayImage}>
        <img src={project.displayImage} alt={project.name} />
        <div className={styles.overlay}>
          <h1 className={styles.name}>{project.name}</h1>
          <div
            className={styles.info}
            title="View Information!"
            onClick={handleModalOpen}
          >
            <VscInfo className={styles.infoIcon} />
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.viewBtn}>
          <VscOpenPreview className={styles.viewIcon} />
          <span>view website</span>
        </button>
        <button className={styles.codeBtn}>
          <VscCode className={styles.codeIcon} />
          <span>view code</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
