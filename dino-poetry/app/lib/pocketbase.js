import Pocketbase from 'pocketbase';

const pb = new Pocketbase(process.env.NEXT_PUBLIC_PB_ADMIN_URL);

const isLoggedIn = pb.authStore.isValid;

export { pb, isLoggedIn };