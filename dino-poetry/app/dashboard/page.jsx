'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserDashboard from '../components/LogOut';
import { pb } from '../lib/pocketbase';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      if (pb.authStore.isValid) {
        setIsAuthenticated(true);
      } else {
        // Redirect to login if not authenticated
        router.push('/auth');
      }
      setLoading(false);
    };
    
    checkAuth();
    
    // Listen for auth state changes (logout events)
    const unsubscribe = pb.authStore.onChange(() => {
      checkAuth();
    });
    
    return () => {
      // Cleanup subscription on component unmount
      unsubscribe && unsubscribe();
    };
  }, [router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-2xl font-bold text-white">Loading...</p>
      </div>
    );
  }

  // Only render dashboard if authenticated
  return isAuthenticated ? <UserDashboard /> : null;
}