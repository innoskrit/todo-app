import { useEffect, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSquareCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {

    // const IN_PROGRESS = "in-progress";

    const [buttonText, setButtonText] = useState(() => {
        switch(props.status) {
            case 0: 
                return "To-Do";
            case 1:
                return "In-Progress";
            case 2: 
                return "Done";
            default:
                console.lof("Error: Unknow Status")
                return "";
        }
    })

    const [buttonClass, setButtonClass] = useState(() => {
        return `status-${buttonText.toLowerCase()}`;
    })

    const [status, setStatus] = useState(props.status)
    const [editedText, setEditedText] = useState(props.title);
    const [isEditingEnabled, setIsEditingEnabled] = useState(false);

    const handleInputChange = (event) => {
        setEditedText(event.target.value);
    }

    const handleSaveIcon = () => {
        setIsEditingEnabled(false);
    }

    const handleEditIcon = () => {
        setIsEditingEnabled(true);
    }

    const handleStatusChange = () => {
        const newStatus = (status + 1) % 3;
        setStatus(newStatus);
    }

    const handleDeleteIcon = () => {
        props.onDeleteTodo(props.id);
    }

    useEffect(() => {
        switch(status) {
            case 0: 
                setButtonClass("status-to-do");
                setButtonText("To-Do");
                break;
            case 1:
                setButtonClass("status-in-progress");
                setButtonText("In-Progress");
                break;
            case 2:
                setButtonClass("status-done");
                setButtonText("Done");
                break;
            default:
                console.error("Unknow Status: " + status);
        } 
    }, [status]);

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
                    <FontAwesomeIcon className="todo-item-action-icon" icon={faTrash} onClick={handleDeleteIcon}></FontAwesomeIcon>
                    <button onClick={handleStatusChange} className={buttonClass}>{buttonText}</button>
                </span>
            </li>
        </>
    );
}

export default TodoItem;