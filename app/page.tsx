import { redirect } from 'next/navigation';
import { defaultLocale } from '@/content/dictionaries';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
