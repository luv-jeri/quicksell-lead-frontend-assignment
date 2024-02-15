import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { getTask } from "@services";
import { taskGroupBy } from "../utils";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

const validGroupingValues = ["none", "priority", "status", "user"];
const validOrderingValues = ["none", "priority", "title"];
const validKeys = ["grouping", "ordering"];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [groupedTasks, setGroupedTasks] = useState(null);
  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem("savedOptions");

    if (savedOptions) return JSON.parse(savedOptions);

    return {
      grouping: "none",
      ordering: "none",
    };
  });
  const [loading, setLoading] = useState(false);

  const updateOption = useCallback(
    (key = "grouping", value = "none") => {
      if (!validKeys.includes(key)) throw new Error(`Invalid key: ${key}`);

      if (key === "grouping" && !validGroupingValues.includes(value))
        throw new Error(`Invalid value: ${value}`);

      if (key === "ordering" && !validOrderingValues.includes(value))
        throw new Error(`Invalid value: ${value}`);

      setOptions((prev) => {
        const newOptions = { ...prev, [key]: value };
        localStorage.setItem("savedOptions", JSON.stringify(newOptions));
        return newOptions;
      });
    },
    [setOptions]
  );

  useEffect(() => {
    setLoading(true);
    getTask()
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!tasks?.data) return;

    const { data } = tasks;

    const groupedTasks = taskGroupBy(data, options.grouping);

    // const orderedTasks = taskOrderBy(data.tickets, options.ordering);
    // console.log("orderedTasks", orderedTasks);

    // setTasks(orderedTasks);
    setGroupedTasks(groupedTasks);
  }, [tasks, options.grouping, options.ordering]);

  return (
    <TaskContext.Provider
      value={{ tasks, loading, updateOption, options, groupedTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
