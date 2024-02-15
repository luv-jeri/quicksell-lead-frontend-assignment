import s from "./BoardCard.module.css";
import { Paper } from "@components";
import PropTypes from "prop-types";

const userPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
});

// Define the PropTypes for the task object
const taskPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  userId: PropTypes.string.isRequired,
  user: userPropTypes.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
});

export const BoardCard = ({ ticket }) => {
  console.log("BoardCard", ticket);
  const { id, title, tag } = ticket;
  return (
    <Paper className={s.board_card}>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <div className={s.ticket_tag}>
        <span>X</span>
        {tag.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Paper>
  );
};

BoardCard.propTypes = {
  ticket: taskPropTypes.isRequired,
};
