import {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef()

  const [name, setName] = useState("");
 
  function handleClick(){
    setName(playerName.current.value)
    name.current.value = ''
  }
 
  return (
    <section id="player">
      {/* //We cant put there the ref because refs doesnt change like states. */}
      <h2>Welcome {name || "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
