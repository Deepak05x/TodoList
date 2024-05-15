import delete_png from "./../assets/delete.png"
import edit_png from "./../assets/edit.png"


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
    return(
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div className="image">
                <img src={edit_png} alt="" className="edit-icon" onClick={() => editTodo(task.id)}/>
                <img src={delete_png} alt="" className="delete-icon" onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}