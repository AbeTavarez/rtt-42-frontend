import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const text = e.target.value.trim();
    console.log(text);
    setUserInput(text);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(`Data: ${userInput}`);

      const message = {
        role: "user",
        content: userInput,
      };

      setMessages([...messages, message]);

      setUserInput("");
      // inputRef.current.focus();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {/* MESSAGES  */}
      <div>
        {messages.map((m, i) => (
          <div key={i}>
            <p>{m.role.toUpperCase()}</p>
            <p>{m.content}</p>
          </div>
        ))}
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
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
