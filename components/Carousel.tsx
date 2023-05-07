import React, { useContext, useState } from "react";
import styles from "../styles/Carousel.module.scss";
import { CarouselContext } from "@/context/carousel";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel = () => {
  const { images, setImages, setIsCarouselOpen } = useContext(CarouselContext);

  const [imageIndex, setImageIndex] = useState(0);

  const handleBtn = (type: string) => {
    let newImageIndex;

    if (type === "next") {
      newImageIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
    } else {
      newImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
    }

    setImageIndex(newImageIndex);
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
    setImages([]);
  };

  return (
    <div className={styles.container}>
      <AiFillCloseCircle
        className={styles.closeIcon}
        onClick={handleCloseCarousel}
      />
      <div className={styles.imageWrapper}>
        <img
          src={images[imageIndex].screenshotUrl}
          alt={`Image #${imageIndex}`}
        />
      </div>

      <button
        className={styles.leftBtn}
        onClick={() => handleBtn("next")}
        disabled={images.length <= 1}
      >
        <BsArrowLeft className={styles.arrowIcon} />
      </button>
      <button
        className={styles.rightBtn}
        onClick={() => handleBtn("prev")}
        disabled={images.length <= 1}
      >
        <BsArrowRight className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export default Carousel;
