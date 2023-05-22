import { ProjectContext } from "@/context/project";
import React, { useContext, useEffect } from "react";
import ReactDom from "react-dom";
import styles from "../../styles/DeleteModal.module.scss";
import { Loader } from "../Loader";

interface propsIFace {
  projectName: string;
  projectId: string;
  open: boolean;
  close: () => void;
}

const DeleteModal: React.FC<propsIFace> = ({
  projectName,
  projectId,
  open,
  close,
}) => {
  const { delProjectLoading, delProjectSuccess, deleteProject } =
    useContext(ProjectContext);

  useEffect(() => {
    if (delProjectSuccess) {
      window.location.reload();
    }
  }, [delProjectSuccess]);

  const handleCloseModal = () => {
    close();
    document.body.style.overflow = "unset";
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <div className={styles.delModalBg} onClick={handleCloseModal}>
      <div
        className={styles.delModalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {delProjectLoading ? (
          <div className={styles.spinner}>
            <Loader />
          </div>
        ) : null}
        <p>
          Are you sure? You are deleting <span>{projectName}</span>. It can't be
          reversed!
        </p>
        <div className={styles.btns}>
          <button
            className={styles.yes}
            onClick={() => deleteProject(projectId)}
            disabled={delProjectLoading}
          >
            yes
          </button>
          <button
            className={styles.no}
            disabled={delProjectLoading}
            onClick={handleCloseModal}
          >
            no
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default DeleteModal;
