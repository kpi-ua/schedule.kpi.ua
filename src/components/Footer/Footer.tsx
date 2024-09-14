import { FooterWrapper, FooterLogo, FooterSection } from './Footer.style';
import logo from '../../assets/footer-logo.svg';
import dayjs from 'dayjs';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo src={logo} alt="footer logo" />
      <FooterSection>
        <p>
          Національний технічний університет України"Київський політехнічний інститут імені Ігоря Сікорського" © 1998-{dayjs().year()}
        </p>
        <p>
          Адреса: Україна, 03056 м.Київ-56, проспект Перемоги, 37
        </p>
      </FooterSection>
      <FooterSection>
        <p>
          Розробник – Конструкторське бюро інформаційних систем
        </p>
        <p>
          Створено в рамках проекту "Електронний кампус КПІ"
        </p>
      </FooterSection>
      <FooterSection>
        <p>
          Використання матеріалу сайту тільки з обов’язковим посиланням на schedule.kpi.ua
        </p>
      </FooterSection>
    </FooterWrapper>
  );
};
