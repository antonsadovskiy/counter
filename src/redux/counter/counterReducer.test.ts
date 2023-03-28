import {counterReducer, CounterStateType, incCounterAC, resetCounterAC} from "./counterReducer";

let startState: CounterStateType

beforeEach(() => {
    startState = {
        counterValue: 3
    }
})

test('should inc counter value', () => {
    const action = incCounterAC()
    const endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(startState.counterValue + 1)
})
test('should reset counter value to start value', () => {
    const startValue = 2
    const action = resetCounterAC(startValue)
    const endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(startValue)
})