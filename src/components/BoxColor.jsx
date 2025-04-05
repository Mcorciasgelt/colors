import React, { useRef, useEffect } from "react"
import "../App.css"

function boxColor ({color, value}) {
  const boxRef = useRef()

  useEffect(() => {
    const box = boxRef.current
    box.style.borderColor = color
    if (value === color) {
      box.style.backgroundColor = color;
    } else {
      box.style.backgroundColor = "transparent";
    }
  }, [value, color])

  return (
    <>
    <div ref={boxRef} className={`box`}>
      {value === color ? `¡Soy ${color}!` : `No soy ${value}`}
    </div>
    </> 
  )
}
export default boxColor;  
