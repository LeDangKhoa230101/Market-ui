import styles from './TitleSection.scss';

import classNames from 'classnames/bind';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';

const cx = classNames.bind(styles);

function TitleSection({ icon, title }) {
    return (
        <div className={cx('section-header')}>
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

export default TitleSection;
