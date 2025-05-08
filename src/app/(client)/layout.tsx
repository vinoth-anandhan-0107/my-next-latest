// app/(client)/layout.tsx
'use client';
import Header from '@/components/common/Header';
import theme from '@/config/themeConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider theme={theme}>
      <AntdRegistry>
        <Header />
        {children}
      </AntdRegistry>
    </ConfigProvider>
  );
}
