import s from "./NavBar.module.css";
import { useMemo, useCallback } from "react";
import {
  Paper,
  Button,
  Menu,
  MenuDropDown,
  MenuTarget,
  Icon,
} from "@components";
import { Item } from "./Item/Item.component";
import { useTask, useTheme } from "@managers";
import { GROUPING_VALUES, ORDERING_VALUES } from "@constants";

export const NavBar = () => {
  const { updateOption, options } = useTask();
  const { toggleTheme } = useTheme();
  
  const handleOptionClick = useCallback((option) => {
    updateOption(option.key, option.value);
  }, []);

  const data = useMemo(() => {
    //  if options.grouping === "priority", then don't show priority in ordering
    if (options.grouping === "priority")
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
          list: ORDERING_VALUES.filter((value) => value !== "priority").map(
            (value) => ({
              label: value.charAt(0).toUpperCase() + value.slice(1),
              value,
            })
          ),
          key: "ordering",
          handleOptionClick,
          selected: options.ordering,
        },
      ];

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
  }, [options]);

  return (
    <Paper height="5rem">
      <div className={s.wrapper}>
        <Menu>
          <MenuTarget>
            <Button className={s.drop_down_target}>
              <Icon name="slider" />
              Display
              <Icon
                name="arrow"
                style={{
                  transform: "rotate(90deg) translateX(-0.1rem)",
                }}
              />
            </Button>
          </MenuTarget>
          <MenuDropDown>
            <div className={s.drop_down}>{data.map(Item)}</div>
          </MenuDropDown>
        </Menu>
        <Button onClick={toggleTheme}>
          <Icon name="theme" />
        </Button>
      </div>
    </Paper>
  );
};
