import React from 'react';
import Head from 'next/head';
import Header from './header-component/header.component';
import Footer from './footer-component/footer.component';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nawy Test App</title>
      </Head>
      <Header />
      <main style={{paddingBottom: '80px'}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
