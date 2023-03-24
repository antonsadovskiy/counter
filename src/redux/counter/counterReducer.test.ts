import {ValuesType} from "../../App";
import {
    changeMaxValueAC,
    changeStartValueAC,
    counterReducer,
    incCounterAC,
    resetCounterAC,
    setStartAsCountAC
} from "./counterReducer";

let startState: ValuesType

beforeEach(() => {
    startState = {
        maxValue: 1,
        startValue: 0,
        counterValue: 0
    }
})

test('should change max value',() => {
    const newMaxValue = 10

    const action = changeMaxValueAC(newMaxValue)
    const endState = counterReducer(startState, action)

    expect(endState.maxValue).toBe(newMaxValue)
    expect(endState.startValue).toBe(0)
    expect(endState.counterValue).toBe(0)
})

test('should change start value',() => {
    const newStartValue = 5

    const action = changeStartValueAC(newStartValue)
    const endState = counterReducer(startState, action)

    expect(endState.maxValue).toBe(1)
    expect(endState.startValue).toBe(newStartValue)
    expect(endState.counterValue).toBe(0)
})

test('should set start value as count value',() => {

    const startValue = 4

    const action = setStartAsCountAC(startValue)
    const endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(startValue)
})

test('should inc counter value', () => {

    const action = incCounterAC()
    const endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(startState.counterValue + 1)
})

test('should reset counter value to start value', () => {

    startState.counterValue = 10
    startState.startValue = 4

    const action = resetCounterAC()
    const endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(startState.startValue)
})