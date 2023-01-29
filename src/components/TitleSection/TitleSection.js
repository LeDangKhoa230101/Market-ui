import styles from './TitleSection.module.scss';

import classNames from 'classnames/bind';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function TitleSection({ icon, title, className }) {
    return (
        <div className={cx('section-header', className)}>
            <div className={cx('section-heading')}>
                {icon}
                <span className={cx('section-title')}>{title}</span>
            </div>
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
        </div>
    );
}

TitleSection.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
};

export default TitleSection;
