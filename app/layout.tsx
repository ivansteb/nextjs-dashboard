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
        <footer className="flex h-20 items-center justify-center bg-gray-100 text-gray-500">
          Hecho con ❤️ por Vercel
        </footer>
      </body>
    </html>
  );
}
