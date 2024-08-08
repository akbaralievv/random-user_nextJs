import Link from 'next/link';

import styles from '@/styles/UserList.module.css';
import { UserType } from '@/types';

interface UserListProps {
  users: UserType[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <ul className={styles.userList}>
    {users.map((user) => (
      <li key={user.login.uuid}>
        <Link href={`/${user.id.value}`}>
          {user.name.first} {user.name.last}
        </Link>
      </li>
    ))}
  </ul>
);

export default UserList;
