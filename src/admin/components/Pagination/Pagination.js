import styles from './Pagination.module.scss';

import classNames from 'classnames/bind';
import ReactPaginate from 'react-paginate';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Pagination({ totalCount, limit, onPageChange, className }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const pageCount = Math.ceil(totalCount / limit);

    const styles = {
        color: 'rgb(78, 151, 253)',
        width: '20px',
        height: '24px',
    };

    return (
        <>
            <ReactPaginate
                className={cx('paginate', className)}
                breakLabel="..."
                nextLabel={<NavigateNextIcon sx={styles} />}
                onPageChange={onPageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                activeClassName={cx('paginate-active')}
                pageClassName={cx('paginate-item')}
                pageLinkClassName={cx('paginate-link')}
                previousLabel={<NavigateBeforeIcon sx={styles} />}
                renderOnZeroPageCount={null}
                previousClassName={cx('control-btn')}
                nextClassName={cx('control-btn')}
                previousLinkClassName={cx('control-link')}
                nextLinkClassName={cx('control-link')}
                disabledClassName={cx('disabled-btn')}
                disabledLinkClassName={cx('disabled-link')}
            />
        </>
    );
}

export default Pagination;
