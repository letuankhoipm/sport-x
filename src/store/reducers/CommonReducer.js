export const CommonReducer =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers; i++) {
      let newState = reducers[i](state, action);
      if (newState !== state) {
        return newState;
      }
      return state;
    }
  };

// The commonReducer function combines multiple reducers into a single function and asks each of them to handle actions.
// Reducers return new objects when they modify the contents of the data store, which makes it easy to detect when an action has been handled.