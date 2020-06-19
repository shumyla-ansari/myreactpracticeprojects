import React from "react"
import Joke from "./joke.js"
import jokesData from "./jokesData"

// import Header from "./Header"
// import Todo from "./Todolist"
// import Cat from "./cat"
// import Footer from "./Footer"
// import MainContext from "./MainContext"
// import Whisk from "./whiskerer.jpg"
// import Tom from "./tom.jpeg"
// import Cleocat from "./cleocat.jpg"
// import Surprisker from "./surprisker.jpg"
// import "./surprisker.jpg"


function App(){

     const jokeComponents = jokesData.map(joke=><Joke key={joke.id} question={joke.question} answer={joke.answer}/>)


return(
     <div>
          {jokeComponents}
          </div>
)
}

 export default App 



/*<div className="contact">
               <Cat
               contact = {{name:"Mr. Whiskerson", img: {Whisk}, phone: "222-222-222-222"}} 
               />
               
               <Cat 
                contact = {{name:"Mr. Surprisker", img: "./surprisker.jpg", phone:"777-222-222-222" }} 
               />
               
               <Cat 
               contact = {{name:"Mr. Cleocat", img: {Cleocat}, phone:"332-222-222-222" }} 
               />
               
               <Cat 
               contact = {{name: "Mr. Tom", img: {Tom}, phone:"999-222-222-222" }} 
               />
           
        </div>
  <h1>This is arrow function for App.js</h1>
     <Header />
     <MainContext />
    
    

<div className="todo-list">
     <Todo />
     <Todo />
     <Footer />
</div>

</div>
     
)
} */