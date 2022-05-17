import React from 'react';
import Header from '~/components/Layouts/components/Header';
import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="content">
                    {/* Content */}
                    {children}
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
