import { getExercise2 } from "../../services/exercise";

export default async function Exercise2() {
  const exercise2FetcedData = await getExercise2();

  console.log(exercise2FetcedData);
  return (
    <div>
      Exercise2
    </div>
  );
}