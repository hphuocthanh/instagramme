import { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagramme';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-3xl font-light">404 | Not Found!</p>
      </div>
    </div>
  );
}
