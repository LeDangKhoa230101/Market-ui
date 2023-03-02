import styles from './AdminLayout.module.scss';
import Header from '~/admin/components/Header';
import Sidebar from '~/admin/components/Sidebar';

import classNames from 'classnames/bind';
import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const [widthSidebar, setWidthSidebar] = useState('280px');
    const [hoverSidebar, setHoverSidebar] = useState('none');
    const [rotate, setRotate] = useState('');

    const [marginLeftContainer, setMarginLeftContainer] = useState('280px');

    const [marginContent, setMarginContent] = useState('72px 0 0 0');
    const [paddingContent, setPaddingContent] = useState('0');

    const [leftHeader, setLeftHeader] = useState('280px');

    const handleSetWidthSidebar = () => {
        setWidthSidebar('86px');
        setRotate('180deg');
        setMarginLeftContainer('86px');
        setMarginContent('72px 95px 0');
        setPaddingContent('0 32px');
        setLeftHeader('86px');

        if (widthSidebar === '86px') {
            setWidthSidebar('280px');
            setRotate('');
            setMarginLeftContainer('280px');
            setMarginContent('72px 0 0 0');
            setPaddingContent('0');
            setLeftHeader('280px');
        }
    };

    const handleMouseOverSidebar = () => {
        if (widthSidebar === '86px') {
            setHoverSidebar('280px');
        }
    };

    const handleMouseOutSidebar = () => {
        if (widthSidebar === '86px') {
            setHoverSidebar('86px');
        } else if (widthSidebar === '280px') {
            setHoverSidebar('280px');
        }
    };

    return (
        <div className={cx('admin')}>
            {/* Sidebar */}
            {isDesktop && (
                <Sidebar
                    widthSidebar={widthSidebar}
                    hoverSidebar={hoverSidebar}
                    rotate={rotate}
                    handleSetWidthSidebar={handleSetWidthSidebar}
                    handleMouseOverSidebar={handleMouseOverSidebar}
                    handleMouseOutSidebar={handleMouseOutSidebar}
                />
            )}

            {/* Container */}
            <div
                className={cx('admin-container')}
                style={{
                    marginLeft: isDesktop
                        ? marginLeftContainer
                        : isTabletAndMobile
                        ? '0'
                        : null,
                }}
            >
                <Header
                    leftHeader={
                        isDesktop ? leftHeader : isTabletAndMobile ? '0' : null
                    }
                />
                <div
                    className={cx('content')}
                    style={{
                        margin: marginContent,
                        padding: paddingContent,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
