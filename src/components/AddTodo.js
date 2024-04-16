import { faSquareCheck, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddTodo = (props) => {

    const [editedText, setEditedText] = useState("");

    const handleInputChange = (event) => {
        setEditedText(event.target.value);
    }

    const handleSaveIcon = () => {
        props.handleSaveTodo(editedText);
    }

    const handleDiscardIcon = () => {
        // setIsEditingEnabled(true);
    }

    return (
        
        <li className="todo-list-item">
        {props.isAddTodoEnabled && (
        <>
            <span>   
                <input type="text" className="todo-item-input-title" value={editedText} onChange={handleInputChange} />
            </span>
            <span>
                <FontAwesomeIcon className="todo-item-action-icon" icon={faSquareCheck} onClick={handleSaveIcon} />
                <FontAwesomeIcon className="todo-item-action-icon" icon={faSquareMinus} onClick={handleDiscardIcon} />
            </span>
        </>
        )}
        </li>
    );
};

export default AddTodo;