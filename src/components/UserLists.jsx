import axios from "axios";
import { useEffect, useState } from "react";
import Lists from "./Lists";


export default function UserLists() {
  const BASE_URL = "http://127.0.0.1:8000/";

  const [lists, setLists] = useState([]);
  
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'token ' + localStorage.getItem('token')
      }
    }

    axios.get(BASE_URL + "list", config)
    .then(response => setLists(response.data))
  }, [])

  return (
    <div>
      {lists.map(list => <Lists key={list.id} list={list} />)}
    </div>
  );
}
