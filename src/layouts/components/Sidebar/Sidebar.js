import styles from './Sidebar.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const cx = classNames.bind(styles);

function Sidebar({ brandData, shopData }) {
    const Tab = styled(TabUnstyled)`
        color: #7d879c;
        cursor: pointer;
        font-size: 2.2rem;
        font-weight: 600;
        padding: 8px;
        border: none;
        min-width: 100px;
        background-color: transparent;

        &.${tabUnstyledClasses.selected} {
            color: var(--text-color);
        }
    `;

    const TabsList = styled(TabsListUnstyled)(
        () => `
        margin-bottom: 8px;
    `,
    );
    return (
        <Box className={cx('sidebar')}>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <Tab>Brands</Tab>
                    <span className={cx('sidebar-separation')}>|</span>
                    <Tab>Shops</Tab>
                </TabsList>
                <TabPanelUnstyled value={0}>
                    {brandData.map((item, index) => {
                        return (
                            <Link
                                to={item.to}
                                key={index}
                                className={cx('sidebar-item')}
                            >
                                <Image
                                    className={cx('sidebar-img')}
                                    src={item.image}
                                />
                                <span className={cx('sidebar-name')}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                    <Link className={cx('sidebar-all-brand-btn')}>
                        View All Brands
                    </Link>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={2}>
                    {shopData.map((item, index) => {
                        return (
                            <Link
                                to={item.to}
                                key={index}
                                className={cx('sidebar-item')}
                            >
                                <Image
                                    className={cx('sidebar-img')}
                                    src={item.image}
                                />
                                <span className={cx('sidebar-name')}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                    <Link className={cx('sidebar-all-brand-btn')}>
                        View All Brands
                    </Link>
                </TabPanelUnstyled>
            </TabsUnstyled>
        </Box>
    );
}

export default Sidebar;
