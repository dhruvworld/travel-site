import { auth } from '../../../lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome, Admin</h1>
      <p>You are logged in as {session.user?.email}</p>
    </div>
  );
}
