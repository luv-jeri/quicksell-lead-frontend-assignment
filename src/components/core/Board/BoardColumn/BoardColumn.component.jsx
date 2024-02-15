import s from "./BoardColumn.module.css";
import { BoardCard } from "../BoardCard/BoardCard.component";
import PropTypes from "prop-types";

export const BoardColumTitle = ({ title, total }) => {
  return (
    <div className={s.column_title}>
      <div className={s.left_column_title}>
        {"X"}
        <h3>{title}</h3>
        <h4>{total}</h4>
      </div>
      <div className={s.right_column_title}>
        {"+"}
        {"..."}
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
  console.log("BoardColumn", title, tickets);
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
