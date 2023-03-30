import {pb} from '../lib/pocketbase';
import { useMutation } from "@tanstack/react-query";

export default function useLogout() {

    function logout(){
        pb.authStore.clear();

    }
  return useMutation(logout);
}
