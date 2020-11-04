import { MEALS } from "../../data/dummy-data"
import mealsAction from '../actions/mealsAction'
import {TOGGLE_FAVORITE} from '../actions/mealsAction'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [MEALS[0]],
}

const mealsReducer = (state=initialState, action) =>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const mealIndex = state.favoriteMeals.findIndex((item1) => item1.id === action.mealId)
            if (mealIndex === -1){
                const index = MEALS.findIndex((item1) => item1.id === action.mealId)
                state.favoriteMeals = [...state.favoriteMeals, MEALS[index]]
                return {...state, favoriteMeals: state.favoriteMeals}
            }
            else{
                const newFavoriteMeals = state.favoriteMeals.filter((item1, index) =>{
                    return !(index === mealIndex)
                })
                return {...state, favoriteMeals: newFavoriteMeals}
            }
        default:
            return state
    }
}

export default mealsReducer