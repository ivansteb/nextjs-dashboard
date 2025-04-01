import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="flex h-10 items-center justify-center bg-blue-500 text-white pb-0">
          Hecho con ❤️ por Vercel
        </footer>
      </body>
    </html>
  );
}
