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
      console.log('Submitting data: ', data)
        login({email: data.email, password: data.password});
        reset();
        }

  return (
<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto justify-center max-w-[80vw]">
  {isError && <p className="p-3 mb-4 text-xl font-bold text-red-500 bg-black border-2 border-red-500">Invalid email or password</p>}
  {isLoading && <p className="text-xl font-bold">Loading...</p>}
  
  <label htmlFor="email">Email address:</label>
  <input 
    id="email"
    className='input-themed' 
    type='text' 
    placeholder='Enter email...' 
    aria-label="Email address"
    {...register('email')}
    style={{
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '3px solid #ffffff',
    borderRadius: '6px',
    padding: '12px'
  }}
  />
  
  <label htmlFor="password">Password:</label>
  <input 
    id="password"
    className='input-themed' 
    type='password' 
    placeholder='Please enter your password' 
    aria-label="Password"
    {...register('password')}
    style={{
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '3px solid #ffffff',
    borderRadius: '6px',
    padding: '12px'
  }}
  />
  
  <button 
    disabled={isLoading} 
    className='login-button'
    type='submit'
  >
    {isLoading ? 'Loading...' : 'Log In'}
  </button>
</form>

    
  )
}

export default dynamic(() => Promise.resolve(LogIn), {
    ssr: false
  })