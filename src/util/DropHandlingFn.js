export const handleDragStart = (index) => {
  window.draggedTaskIndex = index;
};

export const handleDragOver = (index, tasks, setTasks) => {
  if (window.draggedTaskIndex === index) return;

  const newTasks = tasks.filter((_, idx) => idx !== window.draggedTaskIndex);

  newTasks.splice(index, 0, tasks[window.draggedTaskIndex]);

  window.draggedTaskIndex = index;
  setTasks(newTasks);
};

export const handleDragEnd = () => {
  window.draggedTaskIndex = null;
};
