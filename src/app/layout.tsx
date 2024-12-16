import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Housing Profile',
  description: 'A modern real estate application',
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default Layout;
