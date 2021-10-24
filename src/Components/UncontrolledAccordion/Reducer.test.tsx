import {reducer, StateType} from "./Reducer";

test('reducer should be true', () => {
    //data
    const state : StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should throw error because action type is incorrect', () => {
    const state: StateType = {
        collapsed: true
    }

    expect( () => {
        reducer(state, {type: "TOGGLE_COLLAPSED"})
    }).toThrowError()
})