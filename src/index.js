import React from "react";
import ReactDOM from "react-dom"
import App from "./App"


   /*/ function Name() {
      const firstName = "Bob"
      const lastName = "Dylan"

      return (
         <h1>Hello {`${firstName} ${lastName}`}</h1>
         )
      }
/*/

/*function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;

    if (hours < 12) {
        timeOfDay ="morning"
    } 
    else if (hours >= 12 && hours <16) {
        timeOfDay = "afternoon"
    }
     else {
         timeOfDay = "night"
     }
    
return (
    <h1 style={{color: "red", backgroundColor: "yellow"}}>Good {timeOfDay}</h1>
)
}



//ReactDOM.render(<Time/>, document.getElementById("root"));

*/


ReactDOM.render(<App/>, document.getElementById("root"));