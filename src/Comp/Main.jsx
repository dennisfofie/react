import { useState } from 'react';
import '../Styles/hero.css';





export default function Main() {
    const [value, setValue] = useState("");

    const handleOnChange = (event) => {
        let m = event.target.value; 
        setValue(m)
        console.log(m)
        
    }

    const handleClick = (event) => {
        alert(event.target.value);
    }

    return (
        <>
        <div className='hero-section'>
            <div className='hero-text'>
                <h1>Modern Interior <span className="h-span">Design Studio</span></h1>
                <p>It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.</p>
                <div className='hero-buttons'>
                    <button>Shop Now</button>
                    <button>Explore</button>
                </div>
            </div>
            <div className='hero-image'>
                <img src="hero-image.jpeg" alt='sofa chair'/>
            </div>
        </div>
        </>

    );
};