import { useMutation } from "@tanstack/react-query";
import { pb } from "../lib/pocketbase";

export default function useLogin() {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      console.log("Attempting login...");
      const authData = await pb
        .collection('users')
        .authWithPassword(email, password);

      if (!pb.authStore.isValid) {
        console.error("Auth invalid after login attempt");
        throw new Error('Invalid email or password');
      }
      
      console.log("Auth data received:", authData);
      
      // Immediate hard navigation - most reliable method
      window.location.href = '/dashboard'; 
      
      return authData;
    },
    onError: (error) => {
      console.error('Login failed:', error);
    }
  });
}