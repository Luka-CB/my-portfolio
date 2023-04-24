import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Main.module.scss";
import MainScreen from "../components/main/MainScreen";
import SmallScreen from "../components/main/SmallScreen";

export default function Home() {
  const [windowSize, setWindowSize] = useState<number | "">("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is may portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <div className={styles.overlay}></div>
        <div>
          {windowSize < 1050 &&
          typeof window !== "undefined" &&
          window.innerWidth < 1050 ? (
            <SmallScreen />
          ) : (
            <MainScreen />
          )}
        </div>
      </main>
    </>
  );
}
