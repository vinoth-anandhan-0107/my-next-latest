// app/(client)/layout.tsx
'use client';
import Header from '@/components/common/Header';
import theme from '@/config/themeConfig';
import { useDirection } from '@/hooks/useDirection';
import LanguageSetter from '@/providers/LanguageSetter';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const direction = useDirection();
  return (
    <ConfigProvider theme={theme} direction={direction}>
      <AntdRegistry>
        <LanguageSetter />
        <Header />
        {children}
      </AntdRegistry>
    </ConfigProvider>
  );
}
