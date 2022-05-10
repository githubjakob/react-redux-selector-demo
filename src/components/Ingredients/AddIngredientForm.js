import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addIngredient} from "../../slices/General/generalSlice";

const AddIngredientForm = () => {

    const dispatch = useDispatch()

    const [ingredient, setIngredient] = useState("")


    return (<div>
        <form>
        <input  value={ingredient} onChange={e => setIngredient(e.target.value)}/>
        <button type={"button"} onClick={() => dispatch(addIngredient({ingredient} ))} > Add ingredient </button>
        </form>
    </div>)
}

export default AddIngredientForm