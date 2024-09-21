import React from "react";
import styles from "./styles.module.css";

const UserList = ({ users }) => {
  return (
    <ul className={styles.user_list}>
      {users.map((user) => (
        <li key={user.id} className={styles.user_item}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
