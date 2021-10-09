import React from 'react'
import Helmet from 'react-helmet';

const News = () => {
    return (
        <>
            <Helmet>
                <title>News page</title>
                <meta name="the News page of a pop band called Retroriron." content="news page" />
            </Helmet>
            <div>
                News
            </div>
        </>
    )
}

export default News
