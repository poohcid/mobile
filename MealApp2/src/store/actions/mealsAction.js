import { useSelector, useDispatch } from "react-redux";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
}

export const isFavorite = (id) =>{
    return { type: "isFavorite", mealId: id}
}