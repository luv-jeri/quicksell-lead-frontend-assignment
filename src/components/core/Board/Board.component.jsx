export { BoardCard } from "./BoardCard/BoardCard.component";
import { BoardColumn } from "./BoardColumn/BoardColumn.component";
import s from "./Board.module.css";
import PropTypes from "prop-types";


const userPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
});

// Define the PropTypes for each task object
const taskPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  userId: PropTypes.string.isRequired,
  user: userPropTypes.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
});

// Define the PropTypes for the groupedTasks object
const groupedTasksPropTypes = PropTypes.objectOf(
  PropTypes.arrayOf(taskPropTypes.isRequired)
);

export const Board = ({ groupedTasks }) => {

  return (
    <div className={s.wrapper}>
      {Object.entries(groupedTasks).map(([title, tickets]) => (
        <BoardColumn
          key={title}
          title={title}
          tickets={tickets}
         
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  groupedTasks: groupedTasksPropTypes.isRequired,
};
