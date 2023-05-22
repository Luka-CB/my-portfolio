import React, { useContext, useState } from "react";
import styles from "../../styles/AdminProject.module.scss";
import { ProjectContext, projectDataIFace } from "@/context/project";
import { formatDistanceToNow } from "date-fns";
import { BsPencil, BsTrash } from "react-icons/bs";
import DeleteModal from "./DeleteModal";

interface projectIFace {
  project: projectDataIFace;
  index: number;
}

const Project: React.FC<projectIFace> = ({ project, index }) => {
  const [openModal, setOpenModal] = useState(false);

  const { setIsEditStateActive, setEditProjectData } =
    useContext(ProjectContext);

  const date =
    project.created_at && formatDistanceToNow(new Date(project.created_at));

  const handleEditClick = () => {
    setIsEditStateActive(true);
    setEditProjectData(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteClick = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={styles.projectWrapper}>
      <img src={project.displayImages[0].url} alt={project.name} />
      <div className={styles.overlay}>
        <h3>{project.name}</h3>
        <div className={styles.date}>
          <h4>
            Created: <em>{date} ago</em>
          </h4>
        </div>
        <div className={styles.icons}>
          <div
            className={styles.edit}
            title="Edit Project"
            onClick={handleEditClick}
          >
            <BsPencil className={styles.pencil} />
          </div>
          <div
            className={styles.delete}
            title="Delete Project"
            onClick={handleDeleteClick}
          >
            <BsTrash className={styles.trash} />
          </div>
        </div>
      </div>

      <DeleteModal
        projectName={project.name}
        projectId={project.id || ""}
        open={openModal}
        close={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Project;
