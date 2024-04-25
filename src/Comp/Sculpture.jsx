import sculptureList from './data.js';
import { useState } from 'react';


export default function Sculpture() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        // if (index === sculptureList.length - 1) {
        //     setIndex(0);
        // }
        // else{
        //     setIndex(index + 1);
        // }
        setIndex(index + 1);
    }

    function handlePrev() {
        if (index < 1) {
            setIndex(sculptureList.length-2);
        }
        else{
            setIndex(index - 1); 
        }
    }

    if (index === sculptureList.length - 1) {
        setIndex(0);
    }


    let data = sculptureList[index];

    return (
        <>
        <div className='container'>
            <button onClick={handleClick}>next</button>
            <button onClick={handlePrev}>prev</button>
            <h2>
                <span>{data.name} by {data.artist}</span>
            </h2>
            <h3>
                ({index+1} of {sculptureList.length - 1})
            </h3>

            <img src={data.url} alt={data.alt} />
            <p>{data.description}</p>
        </div>
        
        </>

    );
}