import { useEffect, useState } from "react";
import { getUsers} from "../services/userService";
import type { User } from "../services/userService";


function Users() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return (
    <div>
      <h2>Users</h2>

      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}

    </div>
  );
}

export default Users;