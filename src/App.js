import React, {useState} from 'react';
import './App.css';
import SaladViewer from "./components/SaladViewer/SaladViewer";
import SaladViewerRerender from "./components/SaladViewer/SaladViewerRerender";
import AddIngredientForm from "./components/Ingredients/AddIngredientForm";
import SaladViewerRerunSelector from "./components/SaladViewer/SaladViewerRerunSelector";
import Section from "./components/Section/Section";
import SaladViewerRerunSelector2 from "./components/SaladViewer/SaladViewerRerunSelector2";

function App() {


    return (
        <div>

            <Section>
                <SaladViewerRerunSelector/>
                <AddIngredientForm/>
            </Section>
            <Section>
                <SaladViewerRerunSelector2/>
            </Section>
            <Section>
                <SaladViewerRerender/>
                <AddIngredientForm/>
            </Section>
            <Section>
                <SaladViewer/>
                <AddIngredientForm/>
            </Section>
        </div>
    );
}

export default App;
