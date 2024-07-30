import { useContext } from "react";
import styles from "../styles/InfoModal.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { InfoModalContext } from "@/context/infoModal";
import { CarouselContext } from "@/context/carousel";
import { motion } from "framer-motion";

const InfoModal = () => {
  const { setIsInfoModalOpen, pickedInfo } = useContext(InfoModalContext);
  const { setImages, setIsCarouselOpen } = useContext(CarouselContext);

  const handleModalClose = () => {
    setIsInfoModalOpen(false);
  };

  const handleOpenCarousel = (images: any, type: string) => {
    let carouselImages;

    if (type === "displayImages") {
      carouselImages = images.map((img: any) => {
        return {
          id: img.id,
          screenshotUrl: img.url,
        };
      });
    } else {
      carouselImages = images.map((img: any) => {
        return {
          id: img.id,
          screenshotUrl: img.screenshotUrl,
        };
      });
    }

    setImages(carouselImages);
    setIsCarouselOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
      }}
      exit={{ opacity: 0 }}
      className={styles.modalBg}
      onClick={handleModalClose}
    >
      <motion.div
        initial={{ top: 0 }}
        animate={{ top: "50%" }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        exit={{ top: 0, opacity: 0 }}
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
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
              <img
                src={pickedInfo.displayImages[0].url}
                alt={pickedInfo.name}
                onClick={() =>
                  handleOpenCarousel(pickedInfo.displayImages, "displayImages")
                }
              />
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
                    src={screenshot.screenshotUrls[0].screenshotUrl}
                    alt={`Screenshot #${i + 1}`}
                    onClick={() =>
                      handleOpenCarousel(
                        screenshot.screenshotUrls,
                        "screenshotImages"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InfoModal;
