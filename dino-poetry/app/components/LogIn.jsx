import useLogin from '../hooks/useLogin';
import { isLoggedIn } from '../lib/pocketbase';
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

 function LogIn() {
     // the login function can be called mutate, as it is wrapped around useMutate functionality.
  // however here I have renamed it back to login to make things more explicit
  // isLoading is now also coming from the useMutation hook
    const {mutate:login, isLoading, isError } = useLogin();
    const {register, handleSubmit, reset} = useForm();
    const router = useRouter();
    

    async function onSubmit(data){
        login({email: data.email, password: data.password});
        reset();
        }

  return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto justify-center max-w-[80vw]">
            {isError && <p>Invalid email or password</p>}
           {isLoading && <p>Loaaading...</p>}
           <br/>
           <h3>Email address:</h3>
            <input type='text' placeholder='Enter email...' {...register('email')}/>
            <h3>Password:</h3>
            <input type='password' placeholder='Please enter your password' {...register('password')}/>
            <button disabled={isLoading} className='text-white bg-green-700 rounded-xl' type='submit'>
            {isLoading ? 'Loading' : 'Login'}
            </button>
        </form>

    
  )
}

export default dynamic(() => Promise.resolve(LogIn), {
    ssr: false
  })