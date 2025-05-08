import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect immediately to /dashboard
  redirect('/dashboard');

  return null;
}