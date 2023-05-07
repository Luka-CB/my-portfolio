import React from "react";
import styles from "../../styles/AdminProject.module.scss";
import { projectDataIFace } from "@/context/project";
import { formatDistanceToNow } from "date-fns";

interface projectIFace {
  project: projectDataIFace;
}

const Project: React.FC<projectIFace> = ({ project }) => {
  const date =
    project.created_at && formatDistanceToNow(new Date(project.created_at));

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
      </div>
    </div>
  );
};

export default Project;
