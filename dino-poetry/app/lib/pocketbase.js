import Pocketbase from 'pocketbase';

const pb = new Pocketbase(process.env.NEXT_PUBLIC_PB_ADMIN_URL);

export default pb;