import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '@/styles/Home.module.css';
import UserList from '@/components/UserList';
import Pagination from '@/components/Pagination';
import { UserType } from '@/types';

interface HomeProps {
  users: UserType[];
  page: number;
}

const Home: React.FC<HomeProps> = ({ users, page }) => {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />
      <UserList users={filteredUsers} />
      <Pagination currentPage={page} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1 } = context.query;
  const res = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`);
  return { props: { users: res.data.results, page: parseInt(page as string, 10) } };
};

export default Home;
