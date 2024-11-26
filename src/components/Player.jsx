import {useState, useRef} from "react";

export default function Player() {
  const inputRef = useRef()

  const [name, setName] = useState("");
 
  function handleClick(){
    setName(inputRef.current.value)
    name.current.value = ''
  }
 
  return (
    <section id="player">
      <h2>Welcome {name || "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
