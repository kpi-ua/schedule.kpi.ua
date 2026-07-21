import dayjs from 'dayjs';
import LogoIcon from '../../assets/footer-logo.svg?react';

const footerSectionClassName =
  'basis-[260px] max-xs:basis-auto max-xs:text-center [&_a]:text-white [&_a:hover]:text-white [&_a:active]:text-white [&_p]:mt-0 [&_p]:mb-4 [&_p]:text-[12px] [&_p]:leading-[1.43] [&_p]:font-normal [&_p:last-child]:mb-0';

export const Footer = () => {
  return (
    <footer className="flex w-full items-start gap-[40px] bg-brand-900 p-[36px] text-[12px] leading-[1.43] text-white max-xs:flex-col max-xs:items-center max-xs:gap-[16px] max-xs:p-[16px]">
      <LogoIcon className="basis-[120px] max-xs:basis-auto" />
      <section className={footerSectionClassName}>
        <p>
          Національний технічний університет України"Київський політехнічний інститут імені Ігоря Сікорського" © 1998-
          {dayjs().year()}
        </p>
        <p>
          Адреса:{' '}
          <a target="_blank" rel="noreferrer" href="https://kpi.ua/location">
            Україна, 03056 м.Київ-56, проспект Перемоги, 37
          </a>
        </p>
      </section>
      <section className={footerSectionClassName}>
        <p>
          Розробник –{' '}
          <a target="_blank" rel="noreferrer" href="https://kbis.kpi.ua">
            Конструкторське бюро інформаційних систем
          </a>
        </p>
        <p>
          Створено в рамках проекту "
          <a target="_blank" rel="noreferrer" href="https://ecampus.kpi.ua">
            Електронний кампус КПІ
          </a>
          "
        </p>
      </section>
      <section className={footerSectionClassName}>
        <p>
          <a href="/about">Про проєкт</a>
          <br />
          <a href="/contacts">Контакти</a>
        </p>
        <p>Використання матеріалу сайту тільки з обов’язковим посиланням на schedule.kpi.ua</p>
      </section>
    </footer>
  );
};
