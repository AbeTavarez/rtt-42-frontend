import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [userInput, setUserInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const handleChange = (e) => {
    const text = e.target.value.trim();
    console.log(text);
    setUserInput(text);
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="userInput"
            value={userInput}
            ref={inputRef}
            onChange={handleChange}
          />
        </label>

        <button>Send</button>
      </form>
    </div>
  );
}
