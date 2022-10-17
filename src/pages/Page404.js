import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const Page404 = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(process.env.GAID);
    ReactGA.send({
      hitType: 'pageview',
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname,
    });
  }, [location]);
  return (
    <>
      {/* HEAD */}
      <Helmet>
        <title>404Page / レトロリロン OFFICIAL SITE</title>
        <meta
          name="description"
          content="
            音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトの404ページ。
          "
        />
      </Helmet>
      <p style={{ fontSize: '56px', fontWeight: 'bold' }}>
        レトロリロン - 404Page
      </p>
    </>
  );
};

export default Page404;
