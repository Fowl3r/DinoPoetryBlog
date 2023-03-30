import { useMutation } from "@tanstack/react-query";
import {pb }from "../lib/pocketbase";
import { useState } from "react";


export default function useLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    async function login({email, password}){
    // useMutation handles loading state so no need to initialise one everytime
    // useMutation automatically wraps this in a try/catch
      const authData = await pb
        .collection('users')
        .authWithPassword(email, password)

        if(pb.authStore.isValid) setIsLoggedIn(true)
        
}
// whatever function is handed into useMutate can then be called using 'mutate'
return useMutation(login);

}

