import axios from "axios";

export const getTask = async () => {
  let memo_cache = localStorage.getItem("memo_cache") || {
    data: undefined,
  };

  if (memo_cache) memo_cache = JSON.parse(memo_cache);

  if (memo_cache && memo_cache.status === 200) return memo_cache;

  const data = await axios("/frontend-assignment");
  localStorage.setItem("memo_cache", JSON.stringify(data));

  return data;
};
