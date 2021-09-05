import * as React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="container mx-auto px-32 py-14">
                <div className="header">
                <a className="hover:text-blue-500" href="/">
                    <h1 className="text-md">Jonathan Chiu</h1>
                </a>
                </div>
            </div>
        </>
    );
};

export default IndexPage;
