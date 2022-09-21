import Head from "next/head";
import Ocean from "../components/Ocean";
import styles from "../styles/Home.module.css";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Dentsu</title>
      </Head>
      <Ocean />
    </div>
  );
}
