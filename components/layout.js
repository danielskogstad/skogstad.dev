import React from 'react'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <React.Fragment>
        <Head>
            <title>Daniel Skogstad</title>
            <meta name="description" content="Daniel Skogstad - Full Stack Developer / Team Lead. JavaScript, PHP, Java, C#, .Net" />
            <meta name="author" content="Daniel Skogstad" />
        
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <link rel="stylesheet" href="style.css?v=1.0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>
        {children}
        </React.Fragment>
    )
}