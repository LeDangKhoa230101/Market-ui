import styles from './Detail.module.scss';
import DetailProduct from '~/pages/Detail/DetailComponents/DetailProduct';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Detail product */}
                <DetailProduct />
                {/* Detail product */}
            </div>
        </div>
    );
}

export default Detail;
