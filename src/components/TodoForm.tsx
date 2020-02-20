import React, { HTMLProps } from "react";

export function TodoForm (props: HTMLProps<HTMLFormElement>) {
return (
    <form {...props}>
<input
className="form-control"
placeholder="What would you like to get done?"
/>
<button className="btn btn-primary">Create</button>
</form>

)

}

export default TodoForm