import styles from './UserPayment.module.scss';
import UserPaymentAdd from './UserPaymentAdd';
import UserPaymentEdit from './UserPaymentEdit';

import classNames from 'classnames/bind';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function UserPayment() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);

    const handleShowModalAdd = () => {
        setShowModalAdd(true);
    };

    const handleHideModalAdd = () => {
        setShowModalAdd(false);
    };

    const handleShowModalEdit = () => {
        setShowModalEdit(true);
    };

    const handleHideModalEdit = () => {
        setShowModalEdit(false);
    };

    return (
        <div className={cx('container')}>
            {/* Header */}
            <div className={cx('header')}>
                <div>
                    <PaymentIcon className={cx('icon')} />
                    <span className={cx('title')}>Payment Methods</span>
                </div>
                <Button
                    onClick={handleShowModalAdd}
                    sx={{
                        minWidth: isDesktop
                            ? '138px'
                            : isTablet
                            ? '138px'
                            : isMobile
                            ? '100px'
                            : null,
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        padding: isDesktop
                            ? '6px 32px'
                            : isTablet
                            ? '6px 32px'
                            : isMobile
                            ? '6px 10px'
                            : null,
                        color: 'var(--primary-color)',
                        backgroundColor: 'rgb(252, 233, 236)',
                        textTransform: 'capitalize',

                        '&:hover': {
                            backgroundColor: 'rgba(210, 63, 87, 0.04)',
                        },
                    }}
                >
                    Add New Payment Method
                </Button>
            </div>
            {/* Header */}

            {/* Modal Add Payment Methods */}
            <UserPaymentAdd
                showModalAdd={showModalAdd}
                handleHideModalAdd={handleHideModalAdd}
            />
            {/* Modal Add Payment Methods */}

            {/* Modal Edit Payment Methods */}
            <UserPaymentEdit
                showModalEdit={showModalEdit}
                handleHideModalEdit={handleHideModalEdit}
            />
            {/* Modal Edit Payment Methods */}

            {/* content */}
            <Grid
                container
                sx={{
                    marginTop: '20px',
                }}
            >
                <Grid item xs={12}>
                    <div className={cx('payment-item')}>
                        <div className={cx('name')}>
                            <span>Ralf Edward</span>
                        </div>
                        <div>
                            <span>123829374638273</span>
                        </div>
                        <div className={cx('day-exp')}>
                            <span>08 / 2022</span>
                        </div>
                        <div className={cx('action')}>
                            <Link
                                onClick={handleShowModalEdit}
                                className={cx('action-btn')}
                            >
                                <CreateIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#0000008a',
                                        marginBottom: '4px',
                                    }}
                                />
                            </Link>
                            <Link className={cx('action-btn')}>
                                <DeleteForeverIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#0000008a',
                                        marginBottom: '4px',
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={cx('payment-item')}>
                        <div className={cx('name')}>
                            <span>Ralf Edward</span>
                        </div>
                        <div>
                            <span>123829374638273</span>
                        </div>
                        <div className={cx('day-exp')}>
                            <span>08 / 2022</span>
                        </div>
                        <div className={cx('action')}>
                            <Link
                                onClick={handleShowModalEdit}
                                className={cx('action-btn')}
                            >
                                <CreateIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#0000008a',
                                        marginBottom: '4px',
                                    }}
                                />
                            </Link>
                            <Link className={cx('action-btn')}>
                                <DeleteForeverIcon
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#0000008a',
                                        marginBottom: '4px',
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
            {/* content */}
        </div>
    );
}

export default UserPayment;
