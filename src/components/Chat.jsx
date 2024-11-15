import { useState } from "react";

export default function Chat() {
  const [userInput, setUserInput] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const text = e.target.value.trim();
    console.log(text);
    setUserInput(text);
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="userInput"
            value={userInput}
            onChange={handleChange}
          />
        </label>

        <button>Send</button>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormDataChange}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormDataChange}
        />
      </form>
    </div>
  );
}
