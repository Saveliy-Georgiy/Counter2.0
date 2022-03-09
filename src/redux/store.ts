import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    counterState: counterReducer,
})
const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        counterState: store.getState().counterState
    });
});

export type AppStateType = ReturnType<typeof rootReducer>