'use client';
import { signIn } from 'next-auth/react';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => signIn('google', { callbackUrl: '/admin/dashboard' })}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow"
      >
        Sign in with Google
      </button>
    </div>
  );
}
