import { useMutation } from "@tanstack/react-query";
import {pb }from "../lib/pocketbase";
import { useState } from "react";


export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    async function login({email, password}){
    // useMutation handles loading state so no need to initialise one everytime
    // useMutation automatically wraps this in a try/catch
    // error handlid movved explicitly to login function for debugging purposes
      const authData = await pb
        .collection('users')
        .authWithPassword(email, password)

        if(pb.authStore.isValid) {
          setIsLoggedIn(true);
        } else {
          // Remove password from error message
          throw new Error(`Invalid email or password. Password: `, password);
        }
        
}

const mutation = useMutation(login, {
  onError: (error) => {
    console.error('Login failed:', error);
  },
})
// whatever function is handed into useMutate can then be called using 'mutate'
// returned isLoggedIn state incase needs to be used elsewhere
return {
  ...mutation,
  isLoggedIn,
};
}
 
