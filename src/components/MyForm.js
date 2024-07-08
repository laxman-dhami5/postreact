import React, { useState } from 'react';
import classes from './MyForm.module.css';

const MyForm = (props) => {
  const [title, setTitle] = useState('');
  const [openingText, setOpeningText] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setOpeningText(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setReleaseDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    props.newMovies(formData);
    setTitle('');
    setOpeningText('');
    setReleaseDate('');
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={formSubmitHandler}>
        <label className={classes.formLabel} htmlFor="title">Title</label>
        <input className={classes.formInput} type="text" onChange={titleChangeHandler} value={title} /><br /><br />

        <label className={classes.formLabel} htmlFor="openingText">Opening Text</label>
        <textarea className={classes.formInput} onChange={textChangeHandler} value={openingText} /><br /><br />

        <label className={classes.formLabel} htmlFor="releaseDate">Release Date</label>
        <input className={classes.formInput} type="date" onChange={dateChangeHandler} value={releaseDate} /><br /><br />

        <button className={classes.formButton} type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MyForm;
