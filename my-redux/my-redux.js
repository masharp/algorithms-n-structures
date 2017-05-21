/*
 * My from scratch implementation of Redux. Built following Justin Deal at
 * https://zapier.com/engineering/how-to-build-redux/?utm_source=javascriptweekly&utm_medium=email
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */

/**
 * Defualt initial state for our reducer
 */
const initialState = {
  nextStuffId: 1,
  stuff: {},
};

/**
* Handlers
* Functions that handle actions passed to the Reducer Function
*/
const handlers = {
  [CREATE_STUFF]: (state, action) => {
    const id = state.nextStuffId;
    const newStuff = {
      id,
      content: '',
    };


    return {
      ...state,
      nextStuffId: id + 1,
      stuff: {
        ...state.stuff,
        [id]: newStuff,
      }
    };
  },

  [UPDATE_STUFF]: (state, action) => {
    const { id, content } = action;
    const editedStuff = {
      ...state.stuff[id],
      content
    }

    return {
      ...state,
      stuff: {
        ...state.stuff,
        [id]: editedStuff,
      }
    };
  }

};

/**
* The Reducer
* A function that takes an initialState and an action
*
*/
const reducer = (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};
