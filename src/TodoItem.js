import React from "react"

function TodoItem(props){

return(

    <div className="todo-item">
        < input type="checkbox" checked={props.item.completed}/>

        <p>{props.item.text}</p>
           <hr/>

          
          
          </div>
)

}



export default TodoItem



/*</div>Completed:{props.completed}</p>*/