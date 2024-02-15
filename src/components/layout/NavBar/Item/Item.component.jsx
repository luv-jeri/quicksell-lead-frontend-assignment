import s from "./Item.module.css";
import PropTypes from "prop-types";
import { DropDown } from "@components";
import { useCallback } from "react";

export const Item = ({ title, list, key, selected, handleOptionClick }) => {

  const handler = useCallback(
    (option) => {
      handleOptionClick({ key, value: option.value });
    },
    [handleOptionClick, key]
  );
  return (
    <div className={s.wrapper} key={key}>
      <h5>{title}</h5>
      <DropDown options={list} onSelect={handler} selected={selected} />
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  key: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  handleOptionClick: PropTypes.func.isRequired,
};
