import styles from './SidebarCheckout.module.scss';

import classNames from 'classnames/bind';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

function SidebarCheckout() {
    return (
        <div className={cx('sidebar-checkout')}>
            <div className={cx('body')}>
                <p>Subtotal:</p>
                <span>2.610,00 US$</span>
            </div>
            <div className={cx('body')}>
                <p>Shipping:</p>
                <span>-</span>
            </div>
            <div className={cx('body')}>
                <p>Tax:</p>
                <span>40,00 US$</span>
            </div>
            <div className={cx('body')}>
                <p>Discount:</p>
                <span>-</span>
            </div>
            <hr></hr>
            <span className={cx('total-price')}>2.650,00 US$</span>
            <Button
                sx={{
                    minWidth: '100%',
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--white)',
                    fontSize: '1.5rem',
                    textTransform: 'capitalize',
                    marginTop: '24px',

                    '&:hover': {
                        backgroundColor: 'var(--primary-color)',
                        opacity: '0.9',
                    },
                }}
            >
                Place Order
            </Button>
        </div>
    );
}

export default SidebarCheckout;
