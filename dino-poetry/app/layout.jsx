'use client'
import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import FooterMenu from './components/FooterMenu';
import TopNav from './components/TopNav';
import './globals.css'
import Providers from './utils/provider';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />
      </head>
      <body>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <TopNav />
        <Providers>
          {children}
          <FooterMenu />
        </Providers>
      </ThemeProvider>
      </body>
    </html>
  );
}