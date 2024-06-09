import { getExercise1 } from "../../services/exercise";

export default async function Exercise1() {
  const exercise1FetcedData = await getExercise1();

  console.log(exercise1FetcedData);
  return (
    <div>
      Exercise1
    </div>
  );
}