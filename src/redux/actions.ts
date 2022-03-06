export enum ACTIONS_TYPE {
    INCREASE_COUNTER = "FullCounter/INCREASE_COUNTER",
    SET_COUNTER = "FullCounter/SET_COUNTER",
    RESET_COUNTER = "FullCounter/RESET_COUNTER",
    CHANGE_MIN_VALUE = "FullCounter/CHANGE_MIN_VALUE",
    CHANGE_MAX_VALUE = "FullCounter/CHANGE_MAX_VALUE",
}

type IncreaseCounterType = ReturnType<typeof increaseCounterAC>
type SetCounterType = ReturnType<typeof setCounterAC>
type ResetCounterType = ReturnType<typeof resetCounterAC>
type ChangeMinValueType = ReturnType<typeof changeMinValueAC>
type ChangeMaxValueType = ReturnType<typeof changeMaxValueAC>

export const increaseCounterAC = () => {
    return {
        type: ACTIONS_TYPE.INCREASE_COUNTER,
    } as const
}

export const setCounterAC = () => {
    return {
        type: ACTIONS_TYPE.SET_COUNTER,
    } as const
}

export const resetCounterAC = () => {
    return {
        type: ACTIONS_TYPE.RESET_COUNTER,
    } as const
}

export const changeMinValueAC = (minValue: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_MIN_VALUE,
        payload: {minValue,},
    } as const
}

export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        payload: {maxValue,},
    } as const
}

export type FullCounterActionsTypes = IncreaseCounterType | SetCounterType | ResetCounterType | ChangeMinValueType | ChangeMaxValueType