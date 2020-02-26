export const ADD_FOOD = "ADD_FOOD";
export const REMOVE_FOOD = "REMOVE_FOOD";

export function addFood(topping) {
    return {
        type: ADD_FOOD, topping
    }
}

export function removeFood(id) {
    return {
        type: REMOVE_FOOD, id
    }
}