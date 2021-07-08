import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput( value => value.trim() !== '');

  let formIsValid = false

  if(enteredNameIsValid){
    formIsValid = true
  }

  const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log(enteredName)
    resetNameInput()
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} value={enteredName} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
