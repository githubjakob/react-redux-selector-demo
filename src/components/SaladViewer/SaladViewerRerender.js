import React from 'react'
import {useSelector} from "react-redux";
import {
    getIngredientsBySaladNameSLOWasObect,
    getIngredientsBySaladNameSLOWwithIngredients
} from "../../slices/General/generalSelectors";
import styles from "./styles.module.css";

// Component rerenders when selector changes
const SaladViewerRerender = () => {
    const {salad: {ingredients}} = useSelector(getIngredientsBySaladNameSLOWasObect({saladName: "fruitSalad"}))

    return (<div>
        <h2>SaladViewerRerender</h2>
        <p>
            In this example the selector returns a new object every time the it re-runs.
            <br/>
            <br/>
            Consequently the component re-renders when the selector re-runs.
            <br/>
            <br/>
            Also the selector depends on the additional (useless) 'getAllIngredients' selector, so
            when we add ingredients to the state, the selector re-runs.
        </p>
        <div className={styles.box}>
            <div>{ingredients}</div>
        </div>
    </div>)
}

export default SaladViewerRerender