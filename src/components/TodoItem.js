import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {

    let buttonText;
    let buttonClass;

    if(props.status === 0) {
        buttonText = "Todo";
        buttonClass = "status-todo";
    } else if (props.status === 1) {
        buttonText = "In Progress";
        buttonClass = "status-in-progress";
    } else if(props.status === 2) {
        buttonText = "Done";
        buttonClass = "status-done";
    } else {
        console.warn("Invalid Status: " + props.status);
    }

    const [editedText, setEditedText] = useState(props.title);
    const [isEditingEnabled, setIsEditingEnabled] = useState(false);

    const handleInputChange = (event) => {
        setEditedText(event.target.value);
        console.log(editedText);
    }

    const handleSaveIcon = () => {
        setIsEditingEnabled(false);
    }

    const handleEditIcon = () => {
        setIsEditingEnabled(true);
    }

    return (
        <>
            <li className="todo-list-item">
                <span>
                    {isEditingEnabled ? (
                        <input type="text" className="todo-item-input-title" value={editedText} onChange={handleInputChange} />
                    ) : (
                        <span className="todo-item-title">{editedText}</span>
                    )}
                </span>
                <span>
                    {isEditingEnabled ? (
                        <FontAwesomeIcon className="todo-item-action-icon" icon={faSquareCheck} onClick={handleSaveIcon} />
                    ) : (
                        <FontAwesomeIcon className="todo-item-action-icon" icon={faPenToSquare} onClick={handleEditIcon} />
                    )}
                    
                    <Button classname={buttonClass} text={buttonText}></Button>
                </span>
            </li>
        </>
    );
}

export default TodoItem;