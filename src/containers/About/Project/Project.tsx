import { CampusPhoto } from '../common/CampusPhoto';
import { Paragraph } from '../../../components/typography/Paragraph';
import { PhotoWrapper } from '../common/PhotoWrapper';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';

export const Project = () => (
  <TwoColumnsLayout>
    <article>
      <h1>Про проєкт</h1>
      <Paragraph>Вітаємо на офіційному сайті розкладу занять КПІ ім. Ігоря Сікорського!</Paragraph>
      <Paragraph>
        Цей сервіс створено для зручного доступу студентам, викладачам та працівникам університету до інформації щодо
        розкладу навчальних занять та сесії, а також графіку роботи викладачів.
      </Paragraph>
      <Paragraph>Ми прагнемо зробити процес планування навчання простішим і ефективнішим.</Paragraph>
      <Paragraph>На сайті ви можете знайти:</Paragraph>
      <ul>
        <li>розклад занять для академічної групи за тижнями;</li>
        <li>розклад іспитів (оновлюється напередодні сесійного контролю);</li>
        <li>графік роботи викладачів.</li>
      </ul>
      <Paragraph>
        Сервіс надає актуальні дані із системи формування розкладу із зазначенням дати останнього оновлення.
      </Paragraph>
      <Paragraph>Проєкт є частиною цифрової екосистеми унiверситету.</Paragraph>
      <Paragraph>Розробник – Конструкторське бюро інформаційних систем.</Paragraph>
      <Paragraph>Дякуємо, що користуєтесь нашим сервісом!</Paragraph>
      <br />
      <Paragraph>
        <strong>GitHub:</strong> <a href="https://github.com/kpi-ua/schedule.kpi.ua">schedule.kpi.ua</a>
      </Paragraph>
    </article>
    <PhotoWrapper>
      <CampusPhoto src="/about.jpg" alt="" />
    </PhotoWrapper>
  </TwoColumnsLayout>
);
