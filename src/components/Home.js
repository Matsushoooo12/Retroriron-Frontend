import React from 'react'
import Helmet from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
                <meta name="the Home page of a pop band called Retroriron." content="home page" />
            </Helmet>
            <div>
                Home
            </div>
        </>
    )
}

export default Home
