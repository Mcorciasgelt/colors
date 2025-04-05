import React, { useRef, useState } from "react"
import BoxColor from "./BoxColor"

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']


function MyForm() {

  const inputRef = useRef();
  const [value, setValue] = useState("");

  const handleChange = () => {
    setValue(inputRef.current.value.toLowerCase());
  }

  return (
    <>
    <h2>Input Box Colors</h2>
      <input ref={inputRef} onChange={handleChange} placeholder="Escribe un color..." />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm