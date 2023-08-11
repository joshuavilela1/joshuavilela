import '../styles/globals.css';
import { Montserrat, Manrope } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-man',
});

export const metadata = {
  title: 'Joshua Vilela',
  description: 'Portfolio Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
