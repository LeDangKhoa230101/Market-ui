import styles from './SearchItem.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem({ onClick }) {
    return (
        <Link onClick={onClick} href="" className={cx('search-result-item')}>
            Result
        </Link>
    );
}

export default SearchItem;
