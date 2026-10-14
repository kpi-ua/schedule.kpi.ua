import { PhotoWrapper } from '../common/PhotoWrapper';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';
import ContactsPhoto from '../../../../public/contacts.jpg';
import Image from 'next/image';

export const Contacts = () => (
  <TwoColumnsLayout>
    <article>
      <h1>Контакти</h1>
      <p>
        <strong>e-mail:</strong>{' '}
        <a href={`mailto:${process.env.NEXT_PUBLIC_KBIS_URL}`}>{process.env.NEXT_PUBLIC_KBIS_URL}</a>
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
