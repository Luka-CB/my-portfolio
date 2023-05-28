import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/SmallScreen.module.scss";
import { BsCloudDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";

const MainScreen = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.devInfoContainer}>
            <div className={styles.row1}>
              <div className={styles.row1Top}>
                <h1 className={styles.row1Text}>hi, i am</h1>
                <div className={styles.name}>
                  <h1>luka</h1>
                </div>
              </div>
              <div className={styles.row1Bottom}>
                <h2 className={styles.bottomText}>full stack web developer</h2>
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
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.row2}>
              <div className={styles.btns}>
                <button className={styles.dlBtn}>
                  <Link href="https://drive.google.com/uc?export=download&id=1lcqYTG0BvHPoSXm79-J1G3vYaDWA6x0T">
                    <BsCloudDownload className={styles.dlIcon} />
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
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.checkBtnText}>
            <span>check out some of my</span>
            <IoMdArrowDropdownCircle className={styles.arrowIcon} />
          </div>
          <div className={styles.btnWrapper}>
            <button
              className={styles.demoBtn}
              onClick={() => router.push("/demos")}
            >
              demo projects
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.technologies}>
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
    </div>
  );
};

export default MainScreen;
