import s from "./Home.module.css";
import { useTask } from "@managers";
import { Board, Spacer } from "@components";
export const Home = () => {
  const { groupedTasks } = useTask();

  console.log("Home", groupedTasks);

  return (
    <div className={s.wrapper}>
      <Spacer /> {groupedTasks && <Board groupedTasks={groupedTasks} />}
    </div>
  );
};
