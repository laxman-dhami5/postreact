import React, { useState } from 'react';
import classes from './MyForm.module.css';

const MyForm = () => {
 const [title,setTitle]=useState()
  const [text,setText]=useState()
  const [date,setDate]=useState()
  const titleChangeHandler=(event)=>{
   setTitle(event.target.value)
  }
  const textChangeHadler=(event)=>{
    setText(event.target.value)
  }
  const dateChangeHandler=(event)=>{
    setDate(event.target.value)
  }
  const formSubmitHandler=(event)=>{
    event.preventDefault()
    const formData={
      title:title,
      text:text,
      date:date
    }
    console.log(formData)
  }
  
  return (
    <div className={classes.formContainer}>
      <form onSubmit={formSubmitHandler}>
        <label className={classes.formLabel} htmlFor="title">Title</label>
        <input className={classes.formInput} type="text" onChange={titleChangeHandler} value={title}  /><br /><br />

        <label className={classes.formLabel} htmlFor="openingText">Opening Text</label>
        <textarea className={classes.formInput} onChange={textChangeHadler} value={text} /><br /><br />

        <label className={classes.formLabel} htmlFor="releaseDate">Release Date</label>
        <input className={classes.formInput} type="date" onChange={dateChangeHandler} value={date} /><br /><br />

        <button className={classes.formButton} type='submit'>Add Movie</button>
      </form>
    </div>
  );
};

export default MyForm;
