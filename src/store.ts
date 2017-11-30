import { createStore, applyMiddleware, Action } from "redux";
import ReduxThunk from "redux-thunk";

export interface State {
    foo: string;
}
const defaultState: State = {
    foo: "bar"
};

function reducer (state: State = defaultState, action: Action) {
    return state;
}

export const store = createStore(
    reducer
);
