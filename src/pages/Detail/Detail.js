import styles from './Detail.module.scss';
import DetailProduct from './DetailComponents/DetailProduct';
import DescriptionAndReview from './DetailComponents/DescriptionAndReview';
import OtherShop from './DetailComponents/OtherShop';
import AlsoLike from './DetailComponents/AlsoLike';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* Detail product */}
                <DetailProduct />
                {/* Detail product */}

                {/* Description and Review */}
                <DescriptionAndReview />
                {/* Description and Review */}

                {/* OTHER PRODUCTS OF THE SHOP */}
                <OtherShop />
                {/* OTHER PRODUCTS OF THE SHOP */}

                {/* YOU MAY ALSO LIKE */}
                <AlsoLike />
                {/* YOU MAY ALSO LIKE */}
            </div>
        </div>
    );
}

export default Detail;
