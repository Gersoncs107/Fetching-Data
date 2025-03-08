import React from "react";

export default function FormComponent() {
    const [name, setName] = React.useState('')
   
    const handleChange = (e) => {
      setName(e.target.value)
    }

    const handleSubmit = () => {
        const nameInput = document.querySelector('#name').value
     
        // checks if the input field is empty.
        // if it is an alert is fired.
        if (nameInput === '') {
          alert('name cannot be blank')
        }
      }

      return (
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            name="full name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="full name"
          />
        </form>
      )}

      const handleSubmit2 = () => {
        const nameInput = document.querySelector('#name').value
     
        // checks if the input field is empty.
        // if it is an alert is fired.
        if (nameInput === '') {
          alert('name cannot be blank')
        }
      }

      return (
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            name="full name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="full name"
          />
        </form>
      )