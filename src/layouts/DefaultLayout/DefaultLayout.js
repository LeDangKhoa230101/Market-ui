import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Navigation from '~/layouts/components/Navigation';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    return (
        <div className="wrapper">
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
            {isTabletAndMobile && <Navigation />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
