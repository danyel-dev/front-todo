import axios from "axios";
import { useEffect, useState } from "react";


export default function App() {
  const BASE_URL = "http://127.0.0.1:8000/";

  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    config.headers["Authorization"] = "Token 8da3bde513b8d930a7c2d6a2f9f56c0185db4c0a"

    axios.get(BASE_URL + "Lists", config)
    .then(response => setLists(response.data))
  }, [])
  
  console.log(lists)

  return (
    <div className="App">
      <h1>oi</h1>
    </div>
  );
}
