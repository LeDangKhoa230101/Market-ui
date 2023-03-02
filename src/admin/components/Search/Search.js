import styles from './Search.module.scss';

import classNames from 'classnames/bind';
import SearchIcon from '@mui/icons-material/Search';

const cx = classNames.bind(styles);

function Search() {
    return (
        <>
            <div className={cx('header-search')}>
                <SearchIcon
                    sx={{
                        width: '24px',
                        height: '24px',
                        color: '#AEB4BE',
                    }}
                />
                <input
                    className={cx('header-search-input')}
                    type="text"
                    placeholder="Search anything..."
                />
            </div>
        </>
    );
}

export default Search;
