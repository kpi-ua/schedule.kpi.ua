import type { Metadata } from 'next';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';
import { PhotoWrapper } from '../../../containers/About/common/PhotoWrapper';
import Image from 'next/image';
import ContactsPhoto from '../../../../public/contacts.jpg';

export const metadata: Metadata = {
  title: 'Контакти | Розклад КПІ',
  description: 'Контакти служби підтримки schedule.kpi.ua.',
};

export default function ContactsPage() {
  return (
    <TwoColumnsLayout>
      <article>
        <h1>Контакти</h1>
        <p>
          <strong>e-mail:</strong>{' '}
          <a href={`mailto:${process.env.NEXT_PUBLIC_KBIS_EMAIL}`}>{process.env.NEXT_PUBLIC_KBIS_EMAIL}</a>
        </p>
      </article>
      <PhotoWrapper>
        <Image
          src={ContactsPhoto}
          alt="National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”"
        />
      </PhotoWrapper>
    </TwoColumnsLayout>
  );
}
