import { CampusPhoto } from '../common/CampusPhoto';
import { PhotoWrapper } from '../common/PhotoWrapper';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';

export const Contacts = () => (
  <TwoColumnsLayout>
    <article>
      <h1>Контакти</h1>
      <p>
        <strong>e-mail:</strong> <a href="mailto:kbis@edu.kpi.ua">kbis@edu.kpi.ua</a>
      </p>
    </article>
    <PhotoWrapper>
      <CampusPhoto src="/contacts.jpg" alt="" />
    </PhotoWrapper>
  </TwoColumnsLayout>
);
