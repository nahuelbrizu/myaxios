import React from "react";
import spinnerImg from "../../../assets/img/Loading.gif";

let Spinner = ( ) => {

    return(
        <React.Fragment>
            <div >
             <img src={spinnerImg} alt={""} className="d-block m-auto" style={{width: "200px"}} />
             <h1 className="text-center"> Loading...</h1>
            </div>
        </React.Fragment>
    )
};
export default Spinner;