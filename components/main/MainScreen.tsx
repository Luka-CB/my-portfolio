import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Main.module.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";
import { projectDataIFace } from "@/context/project";
import Project from "../Project";

interface propsIFace {
  projects: projectDataIFace[];
}

const MainScreen: React.FC<propsIFace> = ({ projects }) => {
  const router = useRouter();

  console.log(projects);

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.devInfoContainer}>
            <div className={styles.row1}>
              <div className={styles.name}>
                <h1 className={styles.text1}>hi, i am</h1>
                <div className={styles.text2}>
                  <h1>luka</h1>
                </div>
              </div>
              <div className={styles.title}>
                <h2>full stack web developer</h2>
              </div>
              <div className={styles.socialWrapper}>
                <div className={styles.social}>
                  <MdAttachEmail className={styles.emailIcon} />
                  <span>-</span>
                  <h4>lukaaslamazashvili20@gmail.com</h4>
                </div>
                <div className={styles.social}>
                  <BsLinkedin className={styles.linkedinIcon} />
                  <span>-</span>
                  <Link
                    href="https://www.linkedin.com/in/luka-profile"
                    target="_blank"
                  >
                    <h4>www.linkedin.com/in/luka-profile</h4>
                  </Link>
                </div>
              </div>
              <hr className={styles.hr} />
              <div className={styles.btns}>
                <button className={styles.dlBtn} title="View CV">
                  <Link
                    href="https://drive.google.com/file/d/1lcqYTG0BvHPoSXm79-J1G3vYaDWA6x0T/preview"
                    target="_blank"
                  >
                    <VscOpenPreview className={styles.dlIcon} />
                    <span>cv</span>
                  </Link>
                </button>
                <button className={styles.ghBtn}>
                  <Link href="https://github.com/Luka-CB" target="_blank">
                    <BsGithub className={styles.ghIcon} />
                    <span>github</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.js}>
                <DiJavascript1 className={styles.jsIcon} />
              </div>
              <div className={styles.react}>
                <DiReact className={styles.reactIcon} />
              </div>
              <div className={styles.vue}>
                <FaVuejs className={styles.vueIcon} />
              </div>
              <div className={styles.node}>
                <FaNodeJs className={styles.nodeIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.checkBtnText}>
            <span>projects</span>
            <IoMdArrowDropdownCircle className={styles.arrowIcon} />
          </div>
          <div className={styles.projects}>
            {projects.map((project, i) => (
              <Project key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
