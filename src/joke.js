import React from "react";

function Joke(props){

    return(
    <div>
       <h3 style={{display: !props.question && "none"}}>question:{props.question}</h3>
        <h3 style ={{color :!props.question && "grey" }}>answer:{props.answer}</h3>
        <hr/>

   </div>
    )

}


export default Joke