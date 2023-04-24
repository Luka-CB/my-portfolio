import { useContext } from "react";
import styles from "../styles/InfoModal.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { InfoModalContext } from "@/context/infoModal";

const InfoModal = () => {
  const { setIsInfoModalOpen, pickedInfo } = useContext(InfoModalContext);

  const handleModalClose = () => {
    setIsInfoModalOpen(false);
  };

  return (
    <div className={styles.modalBg} onClick={handleModalClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={handleModalClose}>
          <AiFillCloseCircle className={styles.closeIcon} />
        </div>
        <div className={styles.row1}>
          <div className={styles.row1_col1}>
            <h1>{pickedInfo.name}</h1>
            <p>{pickedInfo.description}</p>
          </div>
          <div className={styles.row1_col2}>
            <div className={styles.image}>
              <img src={pickedInfo.displayImage} alt={pickedInfo.name} />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.row2}>
          {pickedInfo.screenshots?.map((screenshot, i) => (
            <div className={styles.screenshot} key={screenshot.id}>
              <div className={styles.info}>
                <p>{screenshot.description}</p>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <img
                    src={screenshot.screenshot}
                    alt={`Screenshot #${i + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
