'use client'

import PocketBase from 'pocketbase';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import {useRouter} from 'next/navigation';

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_ADMIN_URL)

export default function AuthPage() {
  const router = useRouter();
  const {register, handleSubmit} = useForm();
  const [isLoading, setLoading] = useState(false);
  const isLoggedIn = pb.authStore.isValid;
 
  async function login(data){
    setLoading(true);
    try{
      const authData = await pb
        .collection('users')
        .authWithPassword(data.email, data.password)
    } catch (e) {
      alert(e)
    }
    setLoading(false);
    }
    function logout() {
      pb.authStore.clear();
      router.refresh()
;
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
        <form onSubmit={handleSubmit(login)} className="flex flex-col mx-auto justify-center max-w-[80vw]">
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

