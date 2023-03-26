import useLogout from '../hooks/useLogout';
import { pb, isLoggedIn } from '../lib/pocketbase';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

 function LogOut() {
    const router = useRouter();
    const logout =()=>{
        useLogout();
        router.reload();
    } 

  return (
    isLoggedIn && <>
    <h1>Logged In As: {pb.authStore.model && pb.authStore.model.username}</h1>
    <button onClick={logout}>Log Out</button>
</>
  )
}
export default dynamic(() => Promise.resolve(LogOut), {
    ssr: false
  })