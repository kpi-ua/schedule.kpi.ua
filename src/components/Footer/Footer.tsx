import { FooterWrapper, FooterLogo, FooterSection } from './Footer.style';
import logo from '../../assets/footer-logo.svg';
import dayjs from 'dayjs';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo src={logo} alt="КПІ ім. Ігоря Сікорського" />
      <FooterSection>
        <p>
          Національний технічний університет України"Київський політехнічний інститут імені Ігоря Сікорського" © 1998-{dayjs().year()}
        </p>
        <p>
          Адреса: <a href="https://kpi.ua/location">Україна, 03056 м.Київ-56, проспект Перемоги, 37</a>
        </p>
      </FooterSection>
      <FooterSection>
        <p>
          Розробник – <a href="https://kbis.kpi.ua">Конструкторське бюро інформаційних систем</a>
        </p>
        <p>
          Створено в рамках проекту "<a href="https://ecampus.kpi.ua">Електронний кампус КПІ</a>"
        </p>
      </FooterSection>
      <FooterSection>
        <p>
          Використання матеріалу сайту тільки з обов’язковим посиланням на <a href="https://schedule.kpi.ua">schedule.kpi.ua</a>
        </p>
      </FooterSection>
    </FooterWrapper>
  );
};
