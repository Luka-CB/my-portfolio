import styles from "../styles/Loader.module.scss";

export const ButtonLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.loader}></span>
    </div>
  );
};
