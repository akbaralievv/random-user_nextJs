import { useRouter } from 'next/navigation';
import React from 'react';

import styles from '@/styles/User.module.css';
import { UserType } from '@/types';

interface UserProps {
  user: UserType;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => router.push('/')}>
        Back
      </button>
      <h1 className={styles.title}>
        {user.name.first} {user.name.last}
      </h1>
      <p>Age: {user.dob.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Address: {user.location.street.number} {user.location.street.name}, {user.location.city},{' '}
        {user.location.state}, {user.location.country}
      </p>
    </div>
  );
};

export default UserCard;
