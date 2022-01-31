import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import {getGifs} from '../helpers/getGifs'
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({category}) => {

    //const [images, setImages] = useState([]);

    const { data:images, loading} = useFetchGifs(category);
    // useEffect(() =>{
    //     getGifs(category).then(img => setImages(img));
    // }, [category]);
  


    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className="className='animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                <ul>
                    {
                        images.map(img => (
                        <GifGridItem key={img.id} {...img} />
                        ))
                    }
                </ul>
            </div>
        </>

    );
};


