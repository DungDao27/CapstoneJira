import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/FooterHomePage/Footer';

type Props = {};

const HomeTemplate = (props: Props) => {
  const location = useLocation();
  const excludeFooterFromPages = ['/admin', '/register']; 

  const shouldExcludeFooter = excludeFooterFromPages.includes(location.pathname);

  return (
    <>
      
        <Outlet />

    
      {!shouldExcludeFooter && <Footer />}
    </>
  );
};

export default HomeTemplate;
