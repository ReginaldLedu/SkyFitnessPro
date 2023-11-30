const mainSelector = (store) => store.rootReducer.mainState;
const reserveSelector = (store) => store.rootReducer.reserveState;

// mainState
const userSelector = (store) => mainSelector(store)?.user || [];
const courseSelector = (store) => mainSelector(store)?.course || [];

export default userSelector;

// reserveState
const reserveTodoSelector = (store) => reserveSelector(store)?.todo || [];
const reserveUserSelector = (store) => reserveSelector(store)?.user || [];

export { reserveUserSelector, reserveTodoSelector, courseSelector };
