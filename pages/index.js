import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Supply Stock Home</title>
        <meta name="description" content="Supply stock holder." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Supply stock tracker application.</h1>

        <p className={styles.description}>
          Edit your shopping list in{" "}
          <a
            href="https://web.getbring.com/app/"
            className="link"
            target="_blank">
            bring
          </a>
        </p>

        <div className={styles.grid}>
          <div>Supplies Quantities In Stock Carousel</div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
