import TranslationProvider from '@/providers/TranslationProvider';
import './globals.css';

export const metadata = {
  title: 'My AntD + Next.js App',
  description: 'A scalable app using server and client layouts',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
};

export default RootLayout;
