import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ingredients: ["apple", "banana", "cucumber", "tomato"],
    salads: {
        "fruitSalad": {ingredients: ["apple", "banana"]},
        "tomatoSalad": {ingredients: ["tomato", "cucumber"]}
    }
};


export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            state.ingredients.push(action.payload?.ingredient)
        }
    },
    extraReducers: (builder) => {

    },
});

export const {
    addIngredient,
} = generalSlice.actions;

export default generalSlice.reducer;
