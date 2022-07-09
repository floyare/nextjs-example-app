import { userAgentFromString } from 'next/server';
import styles from '../../styles/Users.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users:data
    }
  }
}

const Users = ({users}) => {
  return (
    <div className="content">
      <h2>Our users</h2>
      {users.map(user => {
        return(
          <Link href={"/users/" + user.id} key={user.id}>
            <div className={styles.user}>
              <h1>{user.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
 
export default Users;