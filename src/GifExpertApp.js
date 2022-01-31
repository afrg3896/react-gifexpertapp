import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";





const GifExperApp = () => {

    //const categorias = ['Sakura Card', 'Digimon', 'Dragon Ball']
    const [categorias, setCategories] = useState(['Simpson']);

    return ( 
        <>
            <h2 > GifExpertApp </h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ul>
                {
                    categorias.map(category => (
                        <GiftGrid key={category} category={category}/>
                    ))
                }
            </ul>
        </>
    );

};

export default GifExperApp;