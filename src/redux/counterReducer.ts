import {AppStateType} from "./store";
import {ACTIONS_TYPE, FullCounterActionsTypes} from "./actions";

const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 7,
    minValueForEffect: 0,
    maxValueForEffect: 7,
    valueOrText: true,
    disableButtonSet: true,
    incorrectValue: "Incorrect value!",
    correctValue: "Enter values and press 'set'",
}

export type CounterType = typeof initialState

export const counterReducer = (state = initialState, action: FullCounterActionsTypes): CounterType => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREASE_COUNTER:
            return {...state, value: state.value + 1}
        case ACTIONS_TYPE.SET_COUNTER:
            return {
                ...state,
                valueOrText: true,
                value: state.minValue,
                disableButtonSet: true,
                minValueForEffect: state.minValue,
                maxValueForEffect: state.maxValue,
            }
        case ACTIONS_TYPE.RESET_COUNTER:
            return {
                ...state,
                value: state.minValue,
            }
        case ACTIONS_TYPE.CHANGE_MIN_VALUE:
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
            return {
                ...state,
                valueOrText: false,
                disableButtonSet: false,
                ...action.payload
            }
        default:
            return state
    }
}

export const selectCurrency = (store: AppStateType) => store.counter

//1) как называть экшнКреэйторы и функции, которые вызывают их? ведь AC в кажом писать неправильно

