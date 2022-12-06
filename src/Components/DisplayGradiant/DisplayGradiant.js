import { useState, useEffect } from "react";
import { gradiants } from "../Gradiants/Gradiants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import ".//DisplayGradiant.css"
import Footer from "../Footer/Footer";

const DisplayGradiant = () => {
    let [counter , setCounter] = useState(0);
    const [firstHexColor, setFirstHexColor] = useState("");
    const[secondHexColor , setSecondHexColor] = useState("");

    // function for next button
    // if counter is equal to gradient length increament by 1 else setcouter to 0 ;
    const handleNextButton = () => {
        setCounter((counter += 1 ));
        counter === 11 ? setCounter(1) : setCounter(counter) ;
        console.log(counter);
    };

    // function previous button 

    const handlePrevButton = () => {
        setCounter((counter -=1 ));
        counter === 0 || counter == -1 ? setCounter(10) : setCounter((counter));
        console.log(counter);

    }
    useEffect(() => {
        setFirstHexColor(gradiants[counter].firstHexColor);
        setSecondHexColor(gradiants[counter].secondHexColor)
    }, [counter])
    return (  
    <>
    <div className="bacground"
    style={{
        backgroundImage: `linear-gradient(to right, ${firstHexColor}, ${secondHexColor})`,}}
    >


    
    <div className="controls">
        <p>{firstHexColor} <span> <FontAwesomeIcon icon={faArrowRight} className="arrigt"/> </span>  {secondHexColor}</p>
        <div className="content">

        <button className="previousButton" onClick={handlePrevButton}>
            <FontAwesomeIcon icon={faAnglesLeft} className="icon-arr" />
             </button>
        <button className="next--btn" onClick={handleNextButton}>
                    <FontAwesomeIcon icon={faAnglesRight} className="icon-arr"/>
                    

            </button>
            </div>
    </div>
    {/* <Footer/> */}

    </div>
    

    </>);
}
 
export default DisplayGradiant;