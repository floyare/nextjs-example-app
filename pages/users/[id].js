import Link from 'next/link';

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map(user => {
    return{
      params: {id:user.id.toString()}
    }
  })
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: {user: data}
  }
}

const UserDetails = ({user}) => {
  return (
    <div className="content">
      <h2>Username: {user.username}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.city} {user.address.street} {user.address.suite}</p>
      <p>Phone number: {user.phone}</p>
      <p>Website: <Link href={"http://" + user.website}>{user.website}</Link></p>
    </div>
  );
}
 
export default UserDetails;