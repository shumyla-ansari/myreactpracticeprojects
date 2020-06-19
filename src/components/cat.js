import React from "react"


//import Cleocat from "./cleocat.jpg"

function Cat(props){
    console.log(props)


    return(
        <div className="contact">
            <div className="contact-card">
                 <h3>{props.contact.name}</h3>
                 <img className = "img" src = {props.contact.img} alt = "cat"/>
                 <p>Phone: {props.contact.phone}</p>
 
            </div>
           
        </div>
    )
}

       //    <a href={"mailto" + this.props.email:whiskere@example.com"}/>

export default Cat