import s from "./BoardCard.module.css";
import { Paper , Icon} from "@components";
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
  priority_number: PropTypes.number.isRequired,
});

export const BoardCard = ({ ticket }) => {
  const { id, title, tag, priority_number } = ticket;
  return (
    <Paper className={s.board_card}>
      <h1>
        {id} - {priority_number}
      </h1>
      <h2>{title}</h2>
      <div className={s.ticket_tag}>
        <Icon name="info" />
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
