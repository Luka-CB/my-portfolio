import { useContext } from "react";
import styles from "../styles/Demos.module.scss";
import { VscOpenPreview, VscCode, VscInfo } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";
import { InfoModalContext } from "@/context/infoModal";
import { CodeLinkOptContext } from "@/context/codeLinkOptions";

interface propsIFace {
  index: number | null;
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

const Projects: React.FC<propsIFace> = ({ project, index }) => {
  const { setIsInfoModalOpen, setPickedInfo } = useContext(InfoModalContext);
  const { setIsCodeBtnOptionOpen, setProjectIndex } =
    useContext(CodeLinkOptContext);

  const handleModalOpen = () => {
    setIsInfoModalOpen(true);
    setPickedInfo(project);
  };

  const handleOpenOptions = (e: any) => {
    e.stopPropagation();
    setProjectIndex(index);
    setIsCodeBtnOptionOpen(true);
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
        <button className={styles.codeBtn} onClick={handleOpenOptions}>
          <VscCode className={styles.codeIcon} />
          <span>view code</span>
          <div className={styles.caret}>
            <div className={styles.divider}></div>
            <AiFillCaretDown className={styles.caretIcon} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
