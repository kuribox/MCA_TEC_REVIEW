import { getExercise1 } from "@/services/exercise";
import Range from "@/components/Range";
import styles from "./styles.module.css";

export default async function Exercise1() {
  const exercise1FetcedData = await getExercise1();

  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ width: "70%" }}>
        <Range min={exercise1FetcedData.min} max={exercise1FetcedData.max} suffix="€" />
      </div>
    </div>
  );
}