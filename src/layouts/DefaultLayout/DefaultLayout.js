import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';

import styles from './DefaultLayout.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
