import React from "react"



function ProdComp(props){

    return(
       <div>

           <h3>Name: {props.name}</h3>
           <h3> Price:{props.price.toLocaleString("en-US", 
           { style: "currency", currency: "USD"})}</h3>
           <h3> Description: {props.description}</h3>

       </div>

    )

}


export default ProdComp