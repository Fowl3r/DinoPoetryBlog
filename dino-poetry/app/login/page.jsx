'use client'

import PocketBase from 'pocketbase';
import {useForm} from 'react-hook-form';
import useLogout from '../hooks/useLogout';
import useLogin from '../hooks/useLogin';

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_ADMIN_URL)

export default function AuthPage() {
  const logout = useLogout()
  // the login function can be called mutate, as it is wrapped around useMutate functionality.
  // however here I have renamed it back to login to make things more explicit
  // isLoading is now also coming from the useMutation hook
  const {mutate:login, isLoading, isError } = useLogin();
  const {register, handleSubmit, reset} = useForm();
  const isLoggedIn = pb.authStore.isValid;
 
  async function onSubmit(data){
    login({email: data.email, password: data.password});
    reset();
    }
  

    if (isLoggedIn){
      return(
        <>
          <h1>Logged In As: {pb.authStore.model.username}</h1>
          <button onClick={logout}>Log Out</button>
        </>
      )
    }

  return (
    <div>
           {isError && <p>Invalid email or password</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto justify-center max-w-[80vw]">
           <h1>Login:{pb.authStore.isValid.toString()}</h1>
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
    </div>
  )
}

