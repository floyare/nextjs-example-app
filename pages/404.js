import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    },3000)
  }, []);
  
  return (
    <div className="content">
      <h2>Page not found :(</h2>
      <p>Redirecting to the <Link href="/">home page.</Link></p>
    </div>
  );
}
 
export default NotFound;