import Navbar from '@/components/ui/Navbar';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'A sample Next.js app with routing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
