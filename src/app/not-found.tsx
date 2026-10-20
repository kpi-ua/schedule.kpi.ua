import { redirect } from 'next/navigation';

// Mirrors the old react-router `<Route path="*" element={<Navigate to="/" />} />` fallback.
export default function NotFound() {
  redirect('/');
}
