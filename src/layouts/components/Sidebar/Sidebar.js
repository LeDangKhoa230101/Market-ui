import styles from './Sidebar.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const cx = classNames.bind(styles);

function Sidebar({ brandData, shopData, allBrands, allShops }) {
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
                            <NavLink
                                to={item.to}
                                key={index}
                                className={(nav) =>
                                    cx('sidebar-item', { active: nav.isActive })
                                }
                            >
                                <Image
                                    className={cx('sidebar-img')}
                                    src={item.image}
                                />
                                <span className={cx('sidebar-name')}>
                                    {item.name}
                                </span>
                            </NavLink>
                        );
                    })}
                    <NavLink
                        to={allBrands}
                        className={(nav) =>
                            cx('sidebar-all-brand-btn', {
                                active: nav.isActive,
                            })
                        }
                    >
                        View All Brands
                    </NavLink>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={2}>
                    {shopData.map((item, index) => {
                        return (
                            <NavLink
                                to={item.to}
                                key={index}
                                className={(nav) =>
                                    cx('sidebar-item', { active: nav.isActive })
                                }
                            >
                                <Image
                                    className={cx('sidebar-img')}
                                    src={item.image}
                                />
                                <span className={cx('sidebar-name')}>
                                    {item.name}
                                </span>
                            </NavLink>
                        );
                    })}
                    <NavLink
                        to={allShops}
                        className={(nav) =>
                            cx('sidebar-all-brand-btn', {
                                active: nav.isActive,
                            })
                        }
                    >
                        View All Shops
                    </NavLink>
                </TabPanelUnstyled>
            </TabsUnstyled>
        </Box>
    );
}

export default Sidebar;
