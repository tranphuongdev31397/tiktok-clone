import classNames from 'classnames/bind';
import React from 'react';
import Header from '~/components/Layouts/components/Header';
import SideBar from '../components/SideBar';
import styles from './DefaultLayout.module.scss';
function DefaultLayout({ children }) {
    const cx = classNames.bind(styles);
    return (
        <section className={cx('wrapper')}>
            <Header />
            <section className={cx('container', 'defaultLayout')}>
                <div className={cx('sidebar')}>
                    <SideBar />
                </div>
                <div className={cx('content')}>
                    {/* Content */}
                    {children}
                </div>
            </section>
        </section>
    );
}

export default DefaultLayout;
