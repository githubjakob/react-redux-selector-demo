import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {getIngredientsBySaladName, getSalads} from "../../slices/General/generalSelectors";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./styles.module.css";

const codeString = `const {ingredients} = useSelector(getIngredientsBySaladName(saladName))
`

const SaladViewer = () => {
    const [saladName, setSaladName] = useState( "fruitSalad")
    const {ingredients} = useSelector(getIngredientsBySaladName(saladName))

    return (<div>
        <h2>SaladViewer</h2>
        <p>
            Best case example:
            <br/>
            <br/>
            Here the selector does not re-run when we change the ingredients state.
            <br/>
            <br/>
            Also the component does not re-render because we return a string.

        </p>
        <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {codeString}
        </SyntaxHighlighter>
        <div className={styles.box}>
            <form onSubmit={e => {
                console.log(e.target[0].value)
                setSaladName(e.target[0].value)
                e.preventDefault()
            }}>
                <label>Possible values for the input are: fruitSalad, tomatoSalad</label><br/>
                <label>Select salad: </label><input />
                <button >Sumit</button>
            </form>
            <div>SaladName: {saladName}</div>
            <div>Ingredients: {ingredients}</div>
        </div>
    </div>)
}

export default SaladViewer