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

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(9);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = datas?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
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
                    <AllShopItem datas={currentData} />
                )}

                <div className={cx('bottom')}>
                    <span className={cx('all-shop')}>
                        Showing 1-9 of 300 Shops
                    </span>
                    {currentData && (
                        <PaginationControl
                            className={cx('shops')}
                            totalCount={datas?.length}
                            limit={limit}
                            onPageChange={onPageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllShop;
