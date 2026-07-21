import { AboutHeader } from '../containers/About/AboutHeader';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export const AboutLayout = () => (
  <div className="flex min-h-screen flex-col items-center bg-white">
    <section className="flex w-full justify-center shadow-header">
      <section className="flex w-full max-w-7xl grow flex-col px-9 max-xs:px-4">
        <AboutHeader />
      </section>
    </section>

    <section className="flex w-full max-w-7xl grow flex-col px-9 max-xs:px-4">
      <Outlet />
    </section>

    <section className="flex w-full justify-center bg-brand-900">
      <section className="flex w-full max-w-7xl grow flex-col px-9 max-xs:px-0">
        <Footer />
      </section>
    </section>
  </div>
);
