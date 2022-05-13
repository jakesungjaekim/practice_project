import React from "react";
//import Users component
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
