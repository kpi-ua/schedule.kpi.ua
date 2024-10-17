import { CampusPhoto } from '../common/CampusPhoto';
import { Header1 } from '../../../components/typography/Header';
import { Paragraph } from '../../../components/typography/Paragraph';
import { PhotoWrapper } from '../common/PhotoWrapper';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';

export const Contacts = () => (
  <TwoColumnsLayout>
    <article>
      <Header1>Контакти</Header1>
      <Paragraph>
        <strong>e-mail:</strong> <a href="email:ecampus@kpi.ua">ecampus@kpi.ua</a>
      </Paragraph>
      <Paragraph>
        <a href="https://ecampus.kpi.ua/feedback">Форма скарг та пропозицій</a>
      </Paragraph>
    </article>
    <PhotoWrapper>
      <CampusPhoto src="/contacts.jpg" alt="" />
    </PhotoWrapper>
  </TwoColumnsLayout>
);
