import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/SmallScreen.module.scss";
import { BsCloudDownload, BsGithub } from "react-icons/bs";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

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
                <h4 className={styles.email}>lukaaslamazashvili20@gmail.com</h4>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.row2}>
              <div className={styles.btns}>
                <button className={styles.dlBtn}>
                  <BsCloudDownload className={styles.dlIcon} />
                  <span>cv</span>
                </button>
                <button className={styles.ghBtn}>
                  <BsGithub className={styles.ghIcon} />
                  <span>github</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.checkBtnText}>
            <span>check out som of my</span>
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
