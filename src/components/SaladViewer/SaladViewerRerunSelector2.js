import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {
    getIngredientsBySaladName,
    getIngredientsBySaladNameRERUNinputIsObject,
    getSalads
} from "../../slices/General/generalSelectors";


const SaladViewerRerunSelector2 = () => {
    const [saladName, setSaladName] = useState({saladName: "fruitSalad"})
    const ingredients = useSelector(getIngredientsBySaladNameRERUNinputIsObject({saladName: saladName.saladName}))

    return (<div>
        <h2>SaladViewerRerunSelector2</h2>
        <p>
            In this example the selector takes an object as input argument,
            so every time we select a new fruit salad the selector re-runs.
            <br />
            <br />
            Also the component re-renders because the selector re-runs.
        </p>
        <form onSubmit={e => {
            e.preventDefault()
            const value = e.target[0].value
            if (!["fruitSalad", "tomatoSalad"].includes(value)) {
                console.log("invalid value")
                return;
            }
            setSaladName({"saladName": e.target[0].value})
        }}>
            <label>Possible values for the input are: fruitSalad, tomatoSalad</label>
            <input />
            <button >Sumit</button>
        </form>
        <div>SaladName: {saladName.saladName}</div>
        <div>Ingredients: {ingredients}</div>
    </div>)
}

export default SaladViewerRerunSelector2