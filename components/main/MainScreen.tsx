import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Main.module.scss";
import { BsCloudDownload, BsGithub } from "react-icons/bs";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const MainScreen = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.devInfoContainer}>
            <div className={styles.row1}>
              <h1 className={styles.row1Text}>hi, i am</h1>
              <div className={styles.name}>
                <h1>luka</h1>
              </div>
            </div>
            <div className={styles.row2}>
              <h2 className={styles.row2Text}>full stack web developer</h2>
              <h4 className={styles.email}>lukaaslamazashvili20@gmail.com</h4>
            </div>
            <hr className={styles.hr} />
            <div className={styles.row3}>
              <button className={styles.dlBtn}>
                <BsCloudDownload className={styles.dlIcon} />
                <span>cv</span>
              </button>
              <button className={styles.ghBtn}>
                <BsGithub className={styles.ghIcon} />
                <span>github</span>
              </button>
            </div>
            <div className={styles.row4}>
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
      </div>
    </div>
  );
};

export default MainScreen;
