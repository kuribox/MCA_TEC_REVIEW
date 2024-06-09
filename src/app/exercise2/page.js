import { getExercise2 } from "@/services/exercise";
import Range from "@/components/Range";
import styles from "./styles.module.css";

export default async function Exercise2() {
  const exercise2FetcedData = await getExercise2();

  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ width: "40%" }}>
        <Range values={exercise2FetcedData} suffix="€" />
      </div>
    </div>
  );
}