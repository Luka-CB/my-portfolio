import styles from "../styles/Loader.module.scss";

interface loaderIFace {
  width?: number;
  height?: number;
}

export const Loader: React.FC<loaderIFace> = ({ width = 50, height = 50 }) => {
  const size = {
    width,
    height,
  };
  return (
    <div className={styles.loaderWrapper}>
      <span style={size} className={styles.loader}></span>
    </div>
  );
};
