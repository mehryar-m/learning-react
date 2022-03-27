import React, {useState, useRef} from "react";
import Card from "../common/Card.js"
import styles from "./AddUser.module.css";
import Button from "../common/Button.js"
import ErrorModal from "../common/ErrorModal.js";


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length ===0){
            setError({
                title: 'Invalid Input',
                message: 'Please input vlaid user name'

            });
        }
        // the plus converts enteredAge to a number
        if (+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Age must be greated than 0'
            })
        }

        props.onAddUser(enteredName, enteredAge);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal> }

    <Card className = {styles.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"
        ref={nameInputRef}></input>

        <label htmlFor="age">Age</label>
        <input id="age" type="number"
        ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
        </form>
    </Card>
    </div>);
}

export default AddUser;