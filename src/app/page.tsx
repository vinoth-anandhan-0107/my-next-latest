import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/onboarding');

  return null;
}