import styles from './AdminLayout.module.scss';
import Header from '~/admin/components/Header';
import Sidebar from '~/admin/components/Sidebar';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('admin')}>
            {/* Sidebar */}
            <Sidebar />

            {/* Container */}
            <div className={cx('admin-container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
