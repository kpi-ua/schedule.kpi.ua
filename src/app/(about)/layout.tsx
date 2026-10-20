import { AboutHeader } from '../../containers/About/AboutHeader';
import Footer from '../../components/Footer';

export default function AboutRouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <section className="flex justify-center w-full shadow-header">
        <section className="flex flex-col w-full max-w-7xl grow px-9 max-sm:px-4">
          <AboutHeader />
        </section>
      </section>

      <section className="flex flex-col w-full max-w-7xl grow px-9 max-sm:px-4">{children}</section>

      <section className="flex justify-center w-full bg-brand-900">
        <section className="flex flex-col w-full max-w-7xl grow px-9 max-sm:px-0">
          <Footer />
        </section>
      </section>
    </div>
  );
}
