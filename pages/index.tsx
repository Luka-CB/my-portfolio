import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Main.module.scss";
import MainScreen from "../components/main/MainScreen";
import SmallScreen from "../components/main/SmallScreen";

export default function Home() {
  const [windowSize, setWindowSize] = useState<number | null>(null);

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
        <title>Welcome</title>
        <meta name="description" content="This is may portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <div className={styles.overlay}></div>
        <div>
          {windowSize && windowSize < 1050 ? <SmallScreen /> : <MainScreen />}
        </div>
      </main>
    </>
  );
}
