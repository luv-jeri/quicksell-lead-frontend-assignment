import s from "./NavBar.module.css";
import { useMemo , useCallback } from "react";
import { Paper, Button, Menu, MenuDropDown, MenuTarget } from "@components";
import { Item } from "./Item/Item.component";
import { useTask } from "@managers";
import { GROUPING_VALUES, ORDERING_VALUES } from "@constants";

export const NavBar = () => {
  const { updateOption, options } = useTask();
  const handleOptionClick = useCallback((option) => {
    updateOption(option.key, option.value);
  }, []);

  const data = useMemo(() => {
    return [
      {
        title: "Grouping",
        list: GROUPING_VALUES.map((value) => ({
          label: value.charAt(0).toUpperCase() + value.slice(1),
          value,
        })),
        selected: options.grouping,
        handleOptionClick,
        key: "grouping",
      },
      {
        title: "Ordering",
        list: ORDERING_VALUES.map((value) => ({
          label: value.charAt(0).toUpperCase() + value.slice(1),
          value,
        })),
        key: "ordering",
        handleOptionClick,
        selected: options.ordering,
      },
    ];
  }, []);


  

  return (
    <Paper height="5rem">
      <div className={s.wrapper}>
        <Menu>
          <MenuTarget>
            <Button
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              Display
            </Button>
          </MenuTarget>
          <MenuDropDown>
            <div className={s.drop_down}>{data.map(Item)}</div>
          </MenuDropDown>
        </Menu>
      </div>
    </Paper>
  );
};
