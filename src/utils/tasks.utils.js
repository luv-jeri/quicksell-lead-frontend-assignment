// Memoization function
export const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, func(...args));
    }
    return cache.get(key);
  };
};

// Memoized users.find function
export const memoizedFindUser = memoize((users, userId) => {
  return users.find((user) => user.id === userId);
});

// Function to replace priority numbers with priority labels
export const replacePriority = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    case 0:
      return "No priority";
    default:
      return "Unknown";
  }
};

export const taskGroupBy = memoize((data, groupBy) => {
  if (groupBy === "user") groupBy = "userId";
  return data.tickets.reduce((result, ticket) => {
    const key =
      groupBy === "priority"
        ? replacePriority(ticket[groupBy])
        : groupBy === "userId"
        ? memoizedFindUser(data.users, ticket[groupBy])?.name || "Unknown"
        : ticket[groupBy];
    if (!result[key]) {
      result[key] = [];
    }
    const user = memoizedFindUser(data.users, ticket.userId);
    result[key].push({
      id: ticket.id,
      title: ticket.title,
      tag: ticket.tag,
      userId: ticket.userId,
      user: user
        ? { id: user.id, name: user.name, available: user.available }
        : null,
      status: ticket.status,
      priority: replacePriority(ticket.priority),
    });
    return result;
  }, {});
});

export const taskOrderBy = (data, key) => {
  return data.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};
