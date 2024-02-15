import s from "./BoardColumn.module.css";
import { BoardCard } from "../BoardCard/BoardCard.component";
import PropTypes from "prop-types";
import { Icon, Spacer } from "@components";
import { useTask } from "@managers";
export const BoardColumTitle = ({ title, total }) => {
  const { options } = useTask();
  // const icon = title === 'user' ? 'user' : title === 'priority' ? 'network' : title === 'status' ? 'meter' : 'circle';
  let icon = "circle";

  switch (options.grouping) {
    case "user":
      icon = "user";
      break;
    case "priority":
      icon = "network";
      break;
    case "status":
      icon = "meter";
      break;
    default:
      icon = "circle";
  }
  console.log(icon, options.grouping);
  return (
    <div className={s.column_title}>
      <div className={s.left_column_title}>
        <Icon name={icon} />
        <h3>{title}</h3>
        <h4>{total}</h4>
      </div>
      <div className={s.right_column_title}>
        <Icon name="plus" />
        <Spacer direction="H" amount="xs" />
        <Icon name="more" />
      </div>
    </div>
  );
};

BoardColumTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  total: PropTypes.number.isRequired,
};

export const BoardColumn = ({ title, tickets }) => {
  return (
    <div className={s.column}>
      <BoardColumTitle title={title} total={tickets.length} />
      <div className={s.tickets}>
        {tickets.map((ticket) => (
          <BoardCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

BoardColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tickets: PropTypes.array.isRequired,
};
