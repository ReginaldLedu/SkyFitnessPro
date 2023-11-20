const fitnessSelector = (store) => store.fitness;

const allTodoSelector = (store) => fitnessSelector(store)?.todo || [];
export const userSelector = (store) => fitnessSelector(store)?.user || [];

export default allTodoSelector;
