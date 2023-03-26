import { useMutation } from "@tanstack/react-query";
import {pb }from "../lib/pocketbase";


export default function useLogin() {
    async function login({email, password}){
    // useMutation handles loading state so no need to initialise one everytime
    // useMutation automatically wraps this in a try/catch
      const authData = await pb
        .collection('users')
        .authWithPassword(email, password)
}
// whatever function is handed into useMutate can then be called using 'mutate'
return useMutation(login);

}

