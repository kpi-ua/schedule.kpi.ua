import { PhotoWrapper } from '../common/PhotoWrapper';
import { TwoColumnsLayout } from '../../../layouts/TwoColumnsLayout';
import AboutPhoto from '../../../../public/about.jpg';
import Image from 'next/image';

export const Project = () => (
  <TwoColumnsLayout>
    <article>
      <h1>Про проєкт</h1>
      <p>Вітаємо на офіційному сайті розкладу занять КПІ ім. Ігоря Сікорського!</p>
      <p>
        Цей сервіс створено для зручного доступу студентам, викладачам та працівникам університету до інформації щодо
        розкладу навчальних занять та сесії, а також графіку роботи викладачів.
      </p>
      <p>Ми прагнемо зробити процес планування навчання простішим і ефективнішим.</p>
      <p>На сайті ви можете знайти:</p>
      <ul>
        <li>розклад занять для академічної групи за тижнями;</li>
        <li>розклад іспитів (оновлюється напередодні сесійного контролю);</li>
        <li>графік роботи викладачів.</li>
      </ul>
      <p>Сервіс надає актуальні дані із системи формування розкладу із зазначенням дати останнього оновлення.</p>
      <p>Проєкт є частиною цифрової екосистеми унiверситету.</p>
      <p>Розробник – Конструкторське бюро інформаційних систем.</p>
      <p>Дякуємо, що користуєтесь нашим сервісом!</p>
      <br />
      <p>
        <strong>GitHub:</strong> <a href={process.env.NEXT_PUBLIC_SCHEDULE_REPO_URL}>schedule.kpi.ua</a>
      </p>
    </article>
    <PhotoWrapper>
      <Image
        src={AboutPhoto}
        alt="National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”"
      />
    </PhotoWrapper>
  </TwoColumnsLayout>
);
