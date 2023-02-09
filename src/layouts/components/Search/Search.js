import SearchItem from '~/components/SearchItem';
import PopperWrapper from '~/components/Popper/Popper';

import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const ALL_CATE = [
    {
        title: 'All Categories',
    },
    {
        title: 'Laptop',
        to: '/',
    },
    {
        title: 'Mobile Phone',
        to: '/',
    },
    {
        title: 'Camera',
        to: '/',
    },
    {
        title: 'Headphone',
        to: '/',
    },
    {
        title: 'Accessories',
        to: '/',
    },
    {
        title: 'Music Speaker',
        to: '/',
    },
];

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);

    const [showCate, setShowCate] = useState(null);

    useEffect(() => {
        setSearchResult([]);
    }, []);

    const handleHideResult = () => {
        setShowResults(false);
    };

    const handleValueChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleShowCate = (e) => {
        setShowCate(e.currentTarget);
    };

    const handleHideCate = () => {
        setShowCate(null);
    };

    const openCate = Boolean(showCate);
    const id = openCate ? 'simple-popover' : undefined;

    return (
        <div className={cx('container')}>
            <HeadlessTippy
                visible={searchResult.length > 0 && showResults}
                interactive
                offset={[0, 0]}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <SearchItem onClick={handleHideResult} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <div className={cx('input-wrapper')}>
                        <input
                            value={searchValue}
                            onFocus={() => setShowResults(true)}
                            onChange={handleValueChange}
                            className={cx('search-input')}
                            type="text"
                            placeholder="Searching for..."
                        />
                    </div>

                    <button
                        aria-describedby={id}
                        onClick={handleShowCate}
                        className={cx('cate-btn')}
                    >
                        All Categorys
                        <FontAwesomeIcon
                            className={cx('down-icon')}
                            icon={faAngleDown}
                        />
                    </button>
                    <Popover
                        id={id}
                        open={openCate}
                        anchorEl={showCate}
                        onClose={handleHideCate}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <PopperWrapper>
                            {ALL_CATE.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={item.to}
                                        onClick={handleHideCate}
                                        className={cx('cate-item')}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </PopperWrapper>
                    </Popover>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
