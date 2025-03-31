import useLogout from '../hooks/useLogout';
import { pb, isLoggedIn } from '../lib/pocketbase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

function UserDashboard() {
  const router = useRouter();

  const { mutate: logout } = useLogout();
  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
      <div className="flex flex-col items-center w-full max-w-md p-8 mx-auto mt-16 bg-black border-4 border-white rounded-xl">
          <h1 className="mb-8 text-3xl font-bold text-center text-white">
              User Dashboard
          </h1>
          
          <div className="w-full p-4 mb-6 bg-[#002C2C] border-2 border-white rounded-lg">
              <p className="text-xl text-center text-white">
                  Logged in as: <span className="block mt-2 text-2xl font-bold text-white">{pb.authStore.model && pb.authStore.model.username}</span>
              </p>
          </div>
          
          <Link href="/compose" className="w-full mb-4">
              <button className="w-full p-4 text-xl font-bold text-white bg-green-700 border-2 border-white rounded-xl">
                  Create New Post
              </button>
          </Link>
          
          <button 
              onClick={handleLogout}
              className="w-full p-4 text-xl font-bold text-white bg-red-700 border-2 border-white rounded-xl"
          >
              Log Out
          </button>
      </div>
  )
}

export default dynamic(() => Promise.resolve(UserDashboard), {
  ssr: false
})