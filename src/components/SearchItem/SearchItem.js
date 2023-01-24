import styles from './SearchItem.module.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function SearchItem({ onClick }) {
    return (
        <Link onClick={onClick} href="" className={cx('search-result-item')}>
            Result
        </Link>
    );
}

SearchItem.propTypes = {
    onclick: PropTypes.func,
};

export default SearchItem;
