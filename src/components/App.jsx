import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [sendName, setSendName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleOnClick(event) {
    setSendName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>hello {sendName}</h1>
      <form onSubmit={handleOnClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
