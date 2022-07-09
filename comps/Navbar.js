import Link from 'next/link';
import { ImHome } from 'react-icons/im';
import { BsInfoSquareFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="navbar">
      <h1><Image src="/logo.svg" width={30} height={30}></Image>NextJS App</h1>
      <div className="links">
        <Link href="/"><a><ImHome></ImHome>Home</a></Link>
        <Link href="/about"><a><BsInfoSquareFill></BsInfoSquareFill>About</a></Link>
        <Link href="/users"><a><FaUsers></FaUsers>Users</a></Link>
      </div>
    </div>
  );
}
 
export default Navbar;