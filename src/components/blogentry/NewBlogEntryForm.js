import React from "react"
import { useRef } from "react"
import Card from "../ui/Card"
import classes from "./NewBlogEntryForm.module.css"

function AddBlogEntryForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const descriptionInputRef = useRef()


  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const blogentryData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    }

    // eslint-disable-next-line react/prop-types
    props.onAddBlogentry(blogentryData)

  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Blog Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Blog Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Blog Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Blog Entry</button>
        </div>
      </form>
    </Card>
  )
}

export default AddBlogEntryForm
