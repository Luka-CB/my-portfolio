import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Main.module.scss";
import MainScreen from "../components/main/MainScreen";
import SmallScreen from "../components/main/SmallScreen";
import useWindowWidth from "@/hooks/windowWidth";

export default function Home() {
  const windowWidth = useWindowWidth();

  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="This is may portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <div className={styles.overlay}></div>
        <div>{windowWidth < 1050 ? <SmallScreen /> : <MainScreen />}</div>
      </main>
    </div>
  );
}
