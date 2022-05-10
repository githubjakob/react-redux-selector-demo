import {createSelector} from "@reduxjs/toolkit";

export const getAllIngredients = (state) => state.general.ingredients;

export const getSalads = (state) => state.general.salads;

// Selector reruns when ingredients change
export const getIngredientsBySaladNameSLOWwithIngredients = (saladName) => createSelector(
    getAllIngredients, getSalads,
    (ingredients, salads) => {
        console.log("################# Running selector: getIngredientsBySaladNameSLOWwithIngredients")
        return salads[saladName]
    },
);

// Selector reruns when ingredients change
export const getIngredientsBySaladNameSLOWasObect = ({saladName}) => createSelector(
    getAllIngredients, getSalads,
    (ingredients, salads) => {
        console.log("Running selector: getIngredientsBySaladNameSLOWasObect")
        return {salad: salads[saladName]}
    },
);

// Selector does rerun because input is object
export const getIngredientsBySaladNameRERUNinputIsObject = ({saladName}) => createSelector(
    getSalads,
    (salads) => {
        console.log("Running selector: getIngredientsBySaladName")
        return salads[saladName].ingredients
    },
);

// Selector does not rereun when ingredients change
export const getIngredientsBySaladName = (saladName) => createSelector(
    getSalads,
    (salads) => {
        console.log("Running selector: getIngredientsBySaladName")
        return salads[saladName]
    },
);
