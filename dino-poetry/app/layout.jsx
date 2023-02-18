
/* eslint-disable @next/next/no-head-element */

import FooterMenu from './components/FooterMenu';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>{children}
      <FooterMenu />
      </body>

  
      
    </html>
  );
}
