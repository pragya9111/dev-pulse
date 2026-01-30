import { Space_Grotesk, Fredoka } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space', 
  weight: ['500', '700'] 
});

const fredoka = Fredoka({ 
  subsets: ['latin'], 
  variable: '--font-fredoka', 
  weight: ['400', '500'] 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fredoka.variable}`}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#FB7185',
                borderRadius: 12,
                fontFamily: 'Fredoka, sans-serif',
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
