import React from "react"
import Header from "./Header"
import Todo from "./Todolist"

import Footer from "./Footer"
import MainContext from "./MainContext"

function App (){
return (
<div>
  <h1>This is arrow function for App.js</h1>
     <Header />
     <MainContext />
     <Todo />
     <Todo />
     <Footer />
</div>
     
)
}



export default App