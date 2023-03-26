'use client'
/* 
guide showing how to wrap using new app directory https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/
*/

import "../globals.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
