import React from "react";
import ReactDOM from "react-dom"
import App from "./App"




ReactDOM.render(<App/>, document.getElementById("root"));

// class App extends React.Component {
//     render() {
//     return(
//          <div>
//               <Header username="vschool"/>
//               <Greetings />
//          </div>
//     )
//     }
// }



// class Header extends React.Component{

// render(){

//     return(
//          <p>Welcome, {this.props.username}</p>
//     )
// }
// }

// class Greetings extends React.Component {

// render(){

// const date = new Date()
// const hours = date.getHours()
// let timeOfDay;

// if (hours < 12){
//     timeOfDay ="morning"
// } else if (hours >= 12 && hours < 17) {
//     timeOfDay ="afternoon"
// } else {
//     timeOfDay ="night"
// }

// return (
//     <h1>Good {timeOfDay}to you, sir or madam!</h1>
// )
// }
// }


// //export default App 



// // function App(){
// // const todoItem = todoData.map(item=> 
// // <TodoItem key={item.id} item={item}/>)



// //      return (

// //           <div>
// //                {todoItem}
// //           </div>
// //      )
// // }





//    /*/ function Name() {
//       const firstName = "Bob"
//       const lastName = "Dylan"

//       return (
//          <h1>Hello {`${firstName} ${lastName}`}</h1>
//          )
//       }
// /*/

// /*function App() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay;

//     if (hours < 12) {
//         timeOfDay ="morning"
//     } 
//     else if (hours >= 12 && hours <16) {
//         timeOfDay = "afternoon"
//     }
//      else {
//          timeOfDay = "night"
//      }
    
// return (
//     <h1 style={{color: "red", backgroundColor: "yellow"}}>Good {timeOfDay}</h1>
// )
// }



// //ReactDOM.render(<Time/>, document.getElementById("root"));

// */


