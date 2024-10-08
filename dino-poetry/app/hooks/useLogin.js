import { useMutation } from "@tanstack/react-query";
import {pb }from "../lib/pocketbase";


export default function useLogin() {
  const loginMutation = useMutation({
    mutationFn: async ({ email, password}) => {
      const authData = await pb
      .collection('users')
      .authWithPassword(email,password);

      if (!pb.authStore.isValid){
        throw new Error('Invalid email or password');
      }
      return authData;
    },
    onError: (error) => {
      console.error('Login failed:', error);
    }
  });

  return loginMutation;
}
 
