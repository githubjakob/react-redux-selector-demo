import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {
    getIngredientsBySaladNameSLOWwithIngredients
} from "../../slices/General/generalSelectors";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {duotoneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./styles.module.css";

const codeString = `// Selector reruns when ingredients change
export const getIngredientsBySaladNameSLOWwithIngredients = (saladName) => createSelector(
    getAllIngredients, getSalads,
    (ingredients, salads) => {
        console.log("Running selector: getIngredientsBySaladNameSLOWwithIngredients")
        return salads[saladName]
    },
);

const SaladViewerRerunSelector = () => {
    const [saladName, setSaladName] = useState("fruitSalad")
    const {ingredients} = useSelector(getIngredientsBySaladNameSLOWwithIngredients(saladName))

    return (<div>
        <h2>SaladViewerRerunSelector</h2>
        
        <form onSubmit={e => {
                e.preventDefault()
                const value = e.target[0].value
                console.log('Setting saladName state in component \${value}')
                setSaladName(value)
            }}>
                <label>Possible values for the input are: fruitSalad, tomatoSalad</label><br/>
                <input />
                <button >Sumit</button>
            </form>
      
        <div>SaladName: {saladName}</div>
        <div>Ingredients: {ingredients}</div>
    </div>)
}`


const SaladViewerRerunSelector = () => {
    const [saladName, setSaladName] = useState("fruitSalad")
    const {ingredients} = useSelector(getIngredientsBySaladNameSLOWwithIngredients(saladName))


    return (<div>
        <h2>SaladViewerRerunSelector</h2>
        <p>
            In this example the selector has depends on the additional (useless) 'getAllIngredients' selector.
            <br/>
            <br/>
            So every time we add some to the ingredients state the selector re-runs.
            <br/>
            <br/>
            However, the selector takes an string as input argument. So the selector will not re-run
            when we try to force set the input parameter / state to the very same string.
            <br/>
            <br/>
            The selector returns a string so the component does not re-render, even though the selector re-runs.
        </p>
        {/*<SyntaxHighlighter language="javascript" style={duotoneLight}>*/}
        {/*    {codeString}*/}
        {/*</SyntaxHighlighter>*/}
        <div className={styles.box}>
            <form onSubmit={e => {
                e.preventDefault()
                const value = e.target[0].value
                if (!["fruitSalad", "tomatoSalad"].includes(value)) {
                    console.log("invalid value")
                    return;
                }
                console.log(`Setting saladName state in component '${value}'`)
                setSaladName(value)
            }}>
                <label>Possible values for the input are: fruitSalad, tomatoSalad</label><br/>
                <input />
                <button >Sumit</button>
            </form>
            <div>SaladName: {saladName}</div>
            <div>Ingredients: {ingredients}</div>
        </div>
    </div>)
}

export default SaladViewerRerunSelector