import styles from './Detail.module.scss';
import DetailProduct from './DetailComponents/DetailProduct';
import DescriptionAndReview from './DetailComponents/DescriptionAndReview';
import OtherShop from './DetailComponents/OtherShop';
import AlsoLike from './DetailComponents/AlsoLike';

import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScrollToTop from '~/pages/ScrollToTop';

const cx = classNames.bind(styles);

function Detail() {
    const { id } = useParams();

    const product = useSelector((state) =>
        state.productsFlashDeals.items.find((prod) => prod.id === Number(id)),
    );

    return (
        <div className={cx('wrapper')}>
            <ScrollToTop />
            <div className={cx('container')}>
                {/* Detail product */}
                {!product ? (
                    <section>
                        <h2>Product not found!</h2>
                    </section>
                ) : (
                    <DetailProduct product={product} />
                )}
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
