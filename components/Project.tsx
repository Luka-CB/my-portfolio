import { useContext } from "react";
import styles from "../styles/Demos.module.scss";
import { VscOpenPreview, VscCode, VscInfo } from "react-icons/vsc";
import { AiFillCaretDown } from "react-icons/ai";
import { InfoModalContext } from "@/context/infoModal";
import { CodeLinkOptContext } from "@/context/codeLinkOptions";
import { projectDataIFace } from "@/context/project";
import Link from "next/link";

interface propsIFace {
  index?: number | null;
  project: projectDataIFace;
}

const Project: React.FC<propsIFace> = ({ project, index }) => {
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
        <img src={project.displayImages[0].url} alt={project.name} />
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
          <Link href={project.websiteUrl} target="_blank">
            <VscOpenPreview className={styles.viewIcon} />
            <span>view website</span>
          </Link>
        </button>
        <button className={styles.codeBtn} onClick={handleOpenOptions}>
          {!project.backendUrl ? (
            <Link
              className={styles.btnLink}
              href={project.frontendUrl}
              target="_blank"
            >
              <VscCode className={styles.codeIcon} />
              <span>view code</span>
            </Link>
          ) : (
            <div className={styles.btnOpt}>
              <VscCode className={styles.codeIcon} />
              <span>view code</span>
              <div className={styles.caret}>
                <div className={styles.divider}></div>
                <AiFillCaretDown className={styles.caretIcon} />
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Project;
