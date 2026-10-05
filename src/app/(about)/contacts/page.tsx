import type { Metadata } from 'next';
import { Contacts } from '../../../containers/About/Contacts';

export const metadata: Metadata = {
  title: 'Контакти | Розклад КПІ',
  description: 'Контакти служби підтримки schedule.kpi.ua.',
};

export default function ContactsPage() {
  return <Contacts />;
}
