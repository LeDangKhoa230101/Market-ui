import styles from './UserSidebar.module.scss';

import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function UserSidebar({ USER_DASHBOARD, USER_SETTINGS }) {
    return (
        <div className={cx('sidebar')}>
            {/* dash board */}
            <div className={cx('content')}>
                <p>DASHBOARD</p>
                {USER_DASHBOARD.map((item, index) => {
                    return (
                        <NavLink
                            to={item.to}
                            className={(nav) =>
                                cx('btn-action', { active: nav.isActive })
                            }
                            key={index}
                        >
                            <div className={cx('btn-body')}>
                                {item.icon}
                                <span className={cx('title')}>
                                    {item.title}
                                </span>
                            </div>
                            <span>{item.amount}</span>
                        </NavLink>
                    );
                })}
            </div>
            {/* setting */}
            <div className={cx('content')}>
                <p>ACCOUNT SETTINGS</p>
                {USER_SETTINGS.map((item, index) => {
                    return (
                        <NavLink
                            to={item.to}
                            className={(nav) =>
                                cx('btn-action', { active: nav.isActive })
                            }
                            key={index}
                        >
                            <div className={cx('btn-body')}>
                                {item.icon}
                                <span className={cx('title')}>
                                    {item.title}
                                </span>
                            </div>
                            <span>{item.amount}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

UserSidebar.propTypes = {
    USER_DASHBOARD: PropTypes.array,
    USER_SETTINGS: PropTypes.array,
};

export default UserSidebar;
