import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {

  const [usersList,setUsersList] = useState([]);

  const addUser = (username,age)=>{
    setUsersList((prevList)=>{
      const newList = [...prevList,{id: Math.random().toString(), name: username, age: age}];      
      return newList;
    });
  };


  return (
    <React.Fragment>
      <AddUser onAddUser = {addUser}/>
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
