import React from 'react';
import { Helmet } from 'react-helmet';

const Page404 = () => {
  return (
    <>
      {/* HEAD */}
      <Helmet>
        <title>レトロリロン/OFFICIAL SITE - 404Page</title>
        <meta
          name="description"
          content="
          レトロリロン/OFFICIAL SITE：音楽大学出身の個性豊かな4人組バンド、レトロリロンのWebサイトの404ページ。
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
