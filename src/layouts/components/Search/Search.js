import styles from './Search.scss';
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

const cx = classNames.bind(styles);

const ALL_CATE = [
    {
        title: 'All Categories',
    },
    {
        title: 'Fashion',
        to: '/fashion',
    },
    {
        title: 'Electronics',
        to: '/electronics',
    },
    {
        title: 'Automotive',
        to: '/automotive',
    },
    {
        title: 'Bike',
        to: '/bike',
    },
];

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);

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

    return (
        <div className={cx('search')}>
            <span>
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
                    <input
                        value={searchValue}
                        onFocus={() => setShowResults(true)}
                        onChange={handleValueChange}
                        className={cx('search-input')}
                        type="text"
                        placeholder="Searching for..."
                    />
                </HeadlessTippy>
            </span>
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <HeadlessTippy
                trigger="click"
                offset={[-20, 2]}
                placement="top"
                duration={2000}
                interactive
                render={(attrs) => (
                    <div className={cx('cate-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {ALL_CATE.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={item.to}
                                        className={cx('cate-item')}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <button className={cx('cate-btn')}>
                    All Categorys
                    <FontAwesomeIcon
                        className={cx('down-icon')}
                        icon={faAngleDown}
                    />
                </button>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
