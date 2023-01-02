import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      {/* continue here */}
      <UsersList users={[]} />
    </div>
  );
}

export default App;
