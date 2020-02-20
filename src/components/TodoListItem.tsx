import React from "react";
import Todo from "./todo";

interface Props {
    todo: Todo;
}

export function TodoListItem({ todo}: Props) {
    return ( 
<li className="list-group-item">{todo.task}</li>
)
}

export default TodoListItem