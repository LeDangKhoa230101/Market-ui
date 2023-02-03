import styles from './AllShop.module.scss';
import PaginationControl from '~/components/PaginationControl';
import AllShopItem from './AllShopComponents/AllShopItem';

import classNames from 'classnames/bind';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AllShop() {
    const datas = useSelector((state) => state.shopsSlice.datas);
    const status = useSelector((state) => state.shopsSlice.status);

    const [limit] = useState(9);

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + limit;
    const currentItems = datas?.slice(itemOffset, endOffset);

    const handlePageClick = (event) => {
        const newOffset = (event.selected + limit) % datas.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={cx('wrapper-shops')}>
            <div className={cx('container')}>
                <h3 className={cx('heading')}>All Shops</h3>
                {status === 'loading' ? (
                    <CircularProgress />
                ) : status === 'failed' ? (
                    <Alert
                        severity="error"
                        sx={{
                            alignItems: 'center',
                            fontSize: '1.4rem',
                        }}
                    >
                        This is an error alert — check it out!
                    </Alert>
                ) : (
                    <AllShopItem datas={currentItems} />
                )}

                <div className={cx('bottom')}>
                    <span className={cx('all-shop')}>
                        Showing 1-9 of 300 Shops
                    </span>
                    {currentItems && (
                        <PaginationControl
                            className={cx('shops')}
                            limit={limit}
                            length={datas?.length}
                            handlePageClick={handlePageClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllShop;
