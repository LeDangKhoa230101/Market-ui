import styles from './TitleSection.module.scss';

import classNames from 'classnames/bind';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TitleSection({ icon, title, className, to }) {
    return (
        <div className={cx('section-header', className)}>
            <div className={cx('section-heading')}>
                {icon}
                <span className={cx('section-title')}>{title}</span>
            </div>
            <Link to={to}>
                <Button
                    sx={{
                        fontSize: '1.4rem',
                        textTransform: 'capitalize',
                        color: '#7d879c',
                        height: '26px',
                    }}
                    className={cx('section-right')}
                >
                    View all
                    <ArrowRightIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                        }}
                    />
                </Button>
            </Link>
        </div>
    );
}

TitleSection.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
};

export default TitleSection;
