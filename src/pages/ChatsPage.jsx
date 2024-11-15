import {useEffect, useState} from 'react'
import axios from 'axios'
import Chat from "../components/Chat";

export default function ChatsPage() {
  
  const [allChats, setAllChats] = useState([]);

  const fetchChats = async () => {
    try {
    const res = await axios.get('http://localhost:4000/api/chats');
    console.log(res.data);
    setAllChats(res.data);
        
    } catch (e) {
      console.error(e);
      
    }
  }

 useEffect(() => {
  fetchChats()
 }, []);

 const handleDelete = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:4000/api/chats/${id}`);
    console.log('DELETED CHAT:  ',  res.data);
    
    // fetches the new chats after deleting a chat
    fetchChats()
    
  } catch (e) {
    console.error(e);
    
  }
 }
 
  return (
    <main>
      <h1>Chats Page</h1>
    <div>
      {allChats.map(c => (
        <div key={c._id}>
          <p>{c.title}</p>
          <button onClick={() => handleDelete(c._id)}>delete</button>
        </div>
      ))}
    </div>

      <Chat />
    </main>
  );
}
