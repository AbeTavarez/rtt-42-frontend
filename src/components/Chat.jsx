import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Chat() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  /**
   * Handle Change
   * @param {*} e 
   */
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setUserInput(value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let chatId = currentChat;
      console.log(`Data: ${userInput}`);

      // creates a new chat if there is no chatId
      if (!chatId) {
        const res = await axios.post("http://localhost:9000/api/chats");
        console.log(res.data);
        setCurrentChat(res.data._id); // sets the currentChat to the new chat _id
        chatId = res.data._id;
      }

      const message = {
        role: "user",
        content: userInput,
      };
      //POST
      const res = await axios.post(
        `http://localhost:9000/api/chats/${chatId}/message`,
        message,
      );
      console.log(res.data);

      // setMessages([...messages, message])
      setMessages(res.data.messages);
      setUserInput("");
      inputRef.current.focus();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div>
        {messages.map((m, index) => (
          <div key={index}>
            <p>{m.role}</p>
            <p>{m.content}</p>
          </div>
        ))}
      </div>

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

export default Chat;
