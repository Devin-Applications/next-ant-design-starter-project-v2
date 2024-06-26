"use client";

import './globals.css'
import React from 'react';
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: '#f0f2f5' }}>Header</Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  )
}
