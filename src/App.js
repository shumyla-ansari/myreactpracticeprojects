import {default as React, Component} from "react"
import todoData from "./todoData"
import TodoItem from "./TodoItem"
import { render } from "@testing-library/react"
import cleocat from "./components/cleocat.jpg"



     document.getElementById(backgroundcolor= "red").addEventListener("onMouseOver", function(){

     
     document.getElementById(backgroundcolor="red").style.backgroundcolor= "yellow"
     });
      
      class App extends React.Component{
     constructor(){
          
          super()
     this.state = 
     {todos: todoData}
      }



     
      render(){
     const todoItem = this.state.todos.map(item => <TodoItem key ={item.id} item ={item}/>)

           return (
          <div className= "todo-list">
               {todoItem}
               < img src ="./components/cleocat.jpg" alt= "cat"/>
               <br/>
               <button onMouseOver={onMouseOver}>point me</button>
          </div>
     )
          }
     

}


export default App



// function App(){

//           return(
//                <div>
//                     <Header username="vschool"/>
//                     <Greeting/>
//                </div>
//           )
     

// class Header extends React.Component{

//      render(){

//           return(
//                <p>Welcome, {this.props.username}</p>
//           )
//      }
// }

// class Greetings extends React.Component {

//      render(){

//      const date = new Date()
//      const hours = date.getHours()
//      let timeOfDay;

//      if (hours < 12){
//           timeOfDay ="morning"
//      } else if (hours >= 12 && hours < 17) {
//           timeOfDay ="afternoon"
//      } else {
//           timeOfDay ="night"
//      }

//      return (
//           <h1>Good {timeOfDay}to you, sir or madam!</h1>
//      )
//      }
// }

// export default App 



// // function App(){
// // const todoItem = todoData.map(item=> 
// // <TodoItem key={item.id} item={item}/>)



// //      return (

// //           <div>
// //                {todoItem}
// //           </div>
// //      )
// // }




  
// //   import productsData from "./vschoolProducts.js"
// // import ProdComp from "./prodcomp.js"

  
//   /*function App(){

//      const listProd = productsData.map(value =><ProdComp key={value.id} name ={value.name}
//            price={value.price} description={value.description}/>)
//      return(
//           <div>
//                {listProd}
//           </div>
//      )
// }

// */
  
  
  
//   //import Joke from "./joke.js"
// //import jokesData from "./jokesData"

// // import Header from "./Header"
// // import Todo from "./Todolist"
// // import Cat from "./cat"
// // import Footer from "./Footer"
// // import MainContext from "./MainContext"
// // import Whisk from "./whiskerer.jpg"
// // import Tom from "./tom.jpeg"
// // import Cleocat from "./cleocat.jpg"
// // import Surprisker from "./surprisker.jpg"
// // import "./surprisker.jpg"


// // function App(){

// //      const jokeComponents = jokesData.map(joke=><Joke key={joke.id} question={joke.question} answer={joke.answer}/>)


// // return(
// //      <div>
// //           {jokeComponents}
// //           </div>
// // )
// // }





// // /*<div className="contact">
// //                <Cat
// //                contact = {{name:"Mr. Whiskerson", img: {Whisk}, phone: "222-222-222-222"}} 
// //                />
               
// //                <Cat 
// //                 contact = {{name:"Mr. Surprisker", img: "./surprisker.jpg", phone:"777-222-222-222" }} 
// //                />
               
// //                <Cat 
// //                contact = {{name:"Mr. Cleocat", img: {Cleocat}, phone:"332-222-222-222" }} 
// //                />
               
// //                <Cat 
// //                contact = {{name: "Mr. Tom", img: {Tom}, phone:"999-222-222-222" }} 
// //                />
           
// //         </div>
// //   <h1>This is arrow function for App.js</h1>
// //      <Header />
// //      <MainContext />
    
    

// // <div className="todo-list">
// //      <Todo />
// //      <Todo />
// //      <Footer />
// // </div>

// // </div>
     
// //