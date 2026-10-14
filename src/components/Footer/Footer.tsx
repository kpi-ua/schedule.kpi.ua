import dayjs from 'dayjs';
import Link from 'next/link';
import LogoIcon from '../../assets/footer-logo.svg?react';

const footerSectionClassName =
  'basis-[260px] max-sm:basis-auto max-sm:text-center [&_a]:text-white [&_a:hover]:text-white [&_a:active]:text-white [&_p]:mt-0 [&_p]:mb-4 [&_p]:text-[12px] [&_p]:leading-[1.43] [&_p]:font-normal [&_p:last-child]:mb-0';

export const Footer = () => {
  return (
    <footer className="flex w-full items-start gap-10 bg-brand-900 p-9 text-[12px] leading-[1.43] text-white max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:p-4">
      <LogoIcon className="basis-30 max-sm:basis-auto" />
      <section className={footerSectionClassName}>
        <p>
          Національний технічний університет України&quot;Київський політехнічний інститут імені Ігоря Сікорського&quot;
          © 1998-
          {dayjs().year()}
        </p>
        <p>
          Адреса:{' '}
          <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_LOCATION_URL}>
            Україна, 03056 м.Київ-56, проспект Перемоги, 37
          </a>
        </p>
      </section>
      <section className={footerSectionClassName}>
        <p>
          Розробник –{' '}
          <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_KBIS_URL}>
            Конструкторське бюро інформаційних систем
          </a>
        </p>
        <p>
          Створено в рамках проекту &ldquo;
          <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_ECAMPUS_URL}>
            Електронний кампус КПІ
          </a>
          &rdquo;
        </p>
      </section>
      <section className={footerSectionClassName}>
        <p>
          <Link href="/about">Про проєкт</Link>
          <br />
          <Link href="/contacts">Контакти</Link>
        </p>
        <p>Використання матеріалу сайту тільки з обов’язковим посиланням на schedule.kpi.ua</p>
      </section>
    </footer>
  );
};
