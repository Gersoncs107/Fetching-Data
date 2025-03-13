import { useState, useEffect } from "react";

export default function FormComponent() {
    const [name, setName] = React.useState('')
    const handleChange = (e) => {
        setName(e.target.value)
      }
}