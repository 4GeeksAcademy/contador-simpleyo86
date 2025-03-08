import React, { useState } from "react";
{/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons"; importacion de iconos fontawesome*/}

const SecondsCounter = (props) => {

    const [counter, setCounter] = useState("00");

    return (  
        <div className="bg-black text-white justify-content-center d-flex p-3 m-3 border border- rounded-3 border border-danger-subtle">
        <div className="bg-black text-white justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3"> 
        <img src="src/img/reloj-rosa.png" style={{with:"50px", height:"50px"}}></img> </div>
        {/*icono importado desde <FontAwesomeIcon icon={faClock} /></div>*/}
        <div className="bg-black fs-1 text-white align-items-center justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3">{props.secondSeis % 10}</div>
        <div className="bg-black fs-1 text-white align-items-center justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3">{props.secondCinco % 10}</div>
        <div className="bg-black fs-1 text-white align-items-center justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3">{props.secondCuatro % 10}</div>
        <div className="bg-black fs-1 text-white align-items-center justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3">{props.secondTres % 10}</div>
        <div className="bg-black fs-1 text-white align-items-center justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3">{props.secondDos % 10}</div>
        <div className="bg-black fs-1 text-white align-items-center justify-content-center d-flex p-3 m-2 border border-2 border border-danger-subtle rounded-3">{props.secondUno % 10}</div>
        
        </div>
    );
};

export default SecondsCounter;