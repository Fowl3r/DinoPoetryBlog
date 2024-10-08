import {pb} from '../lib/pocketbase';
import { useMutation } from "@tanstack/react-query";

export default function useLogout() {

  return useMutation({
    mutationFn: () => {
      pb.authStore.clear();
    }
  });
}
