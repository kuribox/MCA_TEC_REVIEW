import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={styles.container}>
       <Link className={styles.button} href="/exercise1">Exercise 1</Link>
       <Link className={styles.button} href="/exercise2">Exercise 2</Link>
    </div>
    </main>
  );
}
