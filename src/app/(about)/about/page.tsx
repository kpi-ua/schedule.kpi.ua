import type { Metadata } from 'next';
import { Project } from '../../../containers/About/Project';

export const metadata: Metadata = {
  title: 'Про проєкт | Розклад КПІ',
  description:
    'Про проєкт schedule.kpi.ua — розклад занять, сесії та графік роботи викладачів КПІ ім. Ігоря Сікорського.',
};

export default function AboutPage() {
  return <Project />;
}
