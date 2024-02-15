import s from "./Home.module.css";
import { useTask } from "@managers";
import { Board, Spacer } from "@components";
export const Home = () => {
  const { groupedTasks } = useTask();

  return (
    <div className={s.wrapper}>
      <Spacer direction="V" amount="m" /> {groupedTasks && <Board groupedTasks={groupedTasks} />}
    </div>
  );
};
