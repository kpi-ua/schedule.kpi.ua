import { FooterLogo, FooterSection, FooterWrapper } from './Footer.style';

import dayjs from 'dayjs';
import logo from '../../assets/footer-logo.svg';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo src={logo} alt="КПІ ім. Ігоря Сікорського" />
      <FooterSection>
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
      </FooterSection>
      <FooterSection>
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
      </FooterSection>
      <FooterSection>
        <p>
          <a href="/about">Про проєкт</a>
          <br />
          <a href="/contacts">Контакти</a>
        </p>
        <p>Використання матеріалу сайту тільки з обов’язковим посиланням на schedule.kpi.ua</p>
      </FooterSection>
    </FooterWrapper>
  );
};
