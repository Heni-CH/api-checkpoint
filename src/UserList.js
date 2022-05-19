import {useState,useEffect} from 'react';
import axios from 'axios';
const  UserList =()=> {
  const [listOfUsers ,setlistOfUsers ]= useState([])
  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then (response =>setlistOfUsers (response.data ))
  .catch (error =>console.log(error))},[])
  
return (
    <div>
    {listOfUsers.map(profile=>(
        <ul>
          <li>
            {profile.name}
          </li>
        </ul>
      ))}
      </div>
) }
export default UserList;