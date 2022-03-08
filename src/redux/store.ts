import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    counter: counterReducer,
})
const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>