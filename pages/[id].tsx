import { GetServerSideProps } from 'next';
import axios from 'axios';

import UserCard from '@/components/UserCard';
import { UserType } from '@/types';

interface UserProps {
  user: UserType;
}

const User: React.FC<UserProps> = ({ user }) => <UserCard user={user} />;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await axios.get(`https://randomuser.me/api/?uuid=${id}`);
  return { props: { user: res.data.results[0] } };
};

export default User;
