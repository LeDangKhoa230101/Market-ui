import styles from './UserAddresses.module.scss';
import ModalAddAddress from './ModalAddAddress';
import ModalEditAddress from './ModalEditAddress';

import classNames from 'classnames/bind';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function UserAddresses() {
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
                    <LocationOnIcon className={cx('icon')} />
                    <span className={cx('title')}>My Addresses</span>
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
                    Add New Address
                </Button>
            </div>
            {/* Header */}

            {/* Modal Add Address */}
            <ModalAddAddress
                showModalAdd={showModalAdd}
                handleHideModalAdd={handleHideModalAdd}
            />
            {/* Modal Add Address */}

            {/* Modal Edit Address */}
            <ModalEditAddress
                showModalEdit={showModalEdit}
                handleHideModalEdit={handleHideModalEdit}
            />
            {/* Modal Edit Address */}

            {/* content */}
            <Grid
                container
                sx={{
                    marginTop: '20px',
                }}
            >
                <Grid item xs={12}>
                    <div className={cx('address-item')}>
                        <div className={cx('name')}>
                            <span>khoa khoa khoa</span>
                        </div>
                        <div className={cx('address')}>
                            <span>
                                123 An Toa Thị Trấn An Phú, Huyện An Phú, An
                                Giang
                            </span>
                        </div>
                        <div className={cx('phone')}>
                            <span>0359118433</span>
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

export default UserAddresses;
