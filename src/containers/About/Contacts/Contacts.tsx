import { CampusPhoto } from '../common/CampusPhoto';
import { Header1 } from '../../../components/typography/Header';
import { Paragraph } from '../../../components/typography/Paragraph';
import { PhotoWrapper } from '../common/PhotoWrapper';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';

export const Contacts = () => (
  <TwoColumnsLayout>
    <article>
      <Header1>schedule.kpi.ua</Header1>
      <Paragraph>
        <strong>e-mail:</strong> <a href="mailto:kbis@edu.kpi.ua">kbis@edu.kpi.ua</a>
      </Paragraph>
    </article>
    <PhotoWrapper>
      <CampusPhoto src="/contacts.jpg" alt="" />
    </PhotoWrapper>
  </TwoColumnsLayout>
);
