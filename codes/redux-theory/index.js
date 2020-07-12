function createStore(reducer) {
    let state,
        listners = [];

    function describe(callback) {
        listners.push(callback);
    }

    function dispatch(action) {
        state = reducer(state, action);

        for(let fun of listners) {
            fun(state);
        }
    }

    function getStore() {
        return state;
    }

    return {
        describe,
        dispatch,
        getStore,
    };

}

function combineReducers(reducerMap) {
    let reducerKeys = Object.keys(reducerMap);

    
    const reducer = (state, action) => {
        let newState = {};

        for (let key of reducerKeys) {
            let currentReducer = reducerMap[key];
            newState[key] = currentReducer(state, action);
        }

        return newState;
    }
    return reducer;

}