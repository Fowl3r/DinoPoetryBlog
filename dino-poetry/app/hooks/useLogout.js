'use client'

import { useRouter } from 'next/navigation';
import {pb} from '../lib/pocketbase';

export default function useLogout() {
    const router = useRouter();
    function logout(){
        pb.authStore.clear();
        router.refresh()
    }
  return logout;
}
