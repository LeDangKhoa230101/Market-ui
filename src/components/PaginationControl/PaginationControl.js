import styles from './PaginationControl.module.scss';

import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const cx = classNames.bind(styles);

function PaginationControl({ handlePageClick, length, limit, className }) {
    const pageCount = Math.ceil(length / limit);

    const styles = {
        color: 'var(--primary-color)',
        width: '20px',
        height: '24px',
    };

    return (
        <>
            <ReactPaginate
                className={cx('paginate', className)}
                breakLabel="..."
                nextLabel={<NavigateNextIcon sx={styles} />}
                onPageChange={handlePageClick}
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

export default PaginationControl;
