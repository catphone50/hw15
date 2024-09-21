import React, { useState, useCallback, useMemo } from "react";
import UserList from "./components/UserList";
import "./App.css";

const initialUsers = [
  { id: 1, name: "Emily Wilson" },
  { id: 2, name: "James Thompson" },
  { id: 3, name: "Sarah Lee" },
  { id: 4, name: "Michael Brown" },
  { id: 5, name: "Olivia Davis" },
  { id: 6, name: "Benjamin Martin" },
  { id: 7, name: "Ava Harris" },
  { id: 8, name: "Alexander White" },
  { id: 9, name: "Isabella Taylor" },
  { id: 10, name: "Ethan Hall" },
  { id: 11, name: "Lily Patel" },
  { id: 12, name: "Logan Brooks" },
  { id: 13, name: "Julia Jenkins" },
  { id: 14, name: "Gabriel Russell" },
  { id: 15, name: "Ruby Foster" },
];

function App() {
  const [filter, setFilter] = useState("");
  const [users] = useState(initialUsers);

  const filterUsers = useCallback((filter, users) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(
    () => filterUsers(filter, users),
    [filter, filterUsers, users]
  );

  return (
    <div className="App">
      <input
        className="input-field"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Фильтр"
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
