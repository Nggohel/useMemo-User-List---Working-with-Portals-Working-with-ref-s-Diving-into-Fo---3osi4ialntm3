import { useMemo } from "react";

function UsersList({ users, startingLetter }) {
  const filteredUsers = useMemo(() => {
    if (!startingLetter) {
      // If startingLetter is not provided, return the original users list
      return users;
    }

    // Filter users based on the starting letter
    return users.filter((user) =>
      user.name.toLowerCase().startsWith(startingLetter.toLowerCase())
    );
  }, [users, startingLetter]);

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
