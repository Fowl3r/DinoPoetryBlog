'use client'

import {useForm} from 'react-hook-form';
import { useEffect, useState, useContext } from 'react';
import useLogout from '../hooks/useLogout';
import useLogin from '../hooks/useLogin';
import {pb} from '../lib/pocketbase';


export default function AuthPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const {mutate: logout} = useLogout();

  // the login function can be called mutate, as it is wrapped around useMutate functionality.
  // however here I have renamed it back to login to make things more explicit
  // isLoading is now also coming from the useMutation hook
  const {mutate:login, isLoading, isError } = useLogin();
  const {register, handleSubmit, reset} = useForm();
  // const router = useRouter();

  async function onSubmit(data){
    login({email: data.email, password: data.password});
    reset();
  }


  useEffect(() => {
  
    if(pb.authStore.isValid) {
      setLoggedIn(true)
      // router.refresh()
    } else {
      setLoggedIn(false)
      // router.refresh()
    }
  },[pb.authStore.isValid])
 


  return (
    <div>

  {loggedIn && 
        <>
          <h1>Logged In As: {pb.authStore.model?.username === null ? 'Not logged in' : pb.authStore.model?.username}</h1>
          <h1>Login:{pb.authStore.isValid.toString()}</h1>
          <button onClick={logout}>Log Out</button>
        </>
  }
           {isError && <p>Invalid email or password</p>}
           {isLoading && <p>Loaaading...</p>}
        {!loggedIn && 
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto justify-center max-w-[80vw]">
           
           <br/>
           <h3>Email address:</h3>
            <input type='text' placeholder='Enter email...' {...register('email')}/>
            <h3>Password:</h3>
            <input type='password' placeholder='Please enter your password' {...register('password')}/>
            <button disabled={isLoading} className='text-white bg-green-700 rounded-xl' type='submit'>
            {isLoading ? 'Loading' : 'Login'}
            </button>
        </form>
        }
    </div>
  )
}

