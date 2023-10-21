import axios from "axios";
import { useEffect, useState } from "react";
import Lists from "./components/Lists";


export default function App() {
  const BASE_URL = "http://127.0.0.1:8000/";

  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    config.headers["Authorization"] = "Token c65af014e59fd25d9e0d4cf66351effe0cf6685a"

    axios.get(BASE_URL + "Lists", config)
    .then(response => setLists(response.data))
  }, [])

  return (
    <div className="App">
      {lists.map(list => <Lists key={list.id} list={list} />)}
    </div>
  );
}
