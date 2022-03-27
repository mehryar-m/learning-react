import React, {useState} from "react";
import Card from "../common/Card.js"
import styles from "./AddUser.module.css";
import Button from "../common/Button.js"
import ErrorModal from "../common/ErrorModal.js";


const AddUser = (props) => {
    const [enteredUsername, setUsername]= useState("");
    const [enteredAge, setenteredAge]= useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
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

        props.onAddUser(enteredUsername, enteredAge);
        setUsername("")
        setenteredAge("")
    };

    const userNameChangeHandler = (event) =>  {
        setUsername(event.target.value);

    }

    const ageChangeHandler = (event) => {
        setenteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal> }

    <Card className = {styles.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}></input>

        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
        </form>
    </Card>
    </div>);
}

export default AddUser;