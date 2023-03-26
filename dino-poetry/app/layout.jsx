
/* eslint-disable @next/next/no-head-element */

import FooterMenu from './components/FooterMenu';
import TopNav from './components/TopNav';
import './globals.css'
import Providers from './utils/provider';

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
      <TopNav />
      <Providers>
      {children}
      <FooterMenu />
      </Providers>
      </body>

  
      
    </html>
  );
}
