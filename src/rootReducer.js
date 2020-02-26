import {ADD_FOOD, REMOVE_FOOD } from './actionCreators'

const initialState = {
    toppings: [],
    id: 0
}

export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case ADD_FOOD:
            var newState = {...state}
            newState.id++
            return {...newState, 
                toppings: [...newState.toppings, { topping: action.topping, id: newState.id }]
            }
            case REMOVE_FOOD:
                let toppings = state.toppings.filter(val => val.id !== action.id)
                return {...state, toppings}
            default: 
                return state
    }
    
}
