import styles from './AllShopItem.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function AllShopItem({ datas }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    return (
        <Grid container spacing={3}>
            {datas.map((item) => {
                return (
                    <Grid
                        item
                        xs={isDesktop ? 4 : isTablet ? 6 : isMobile ? 12 : null}
                        key={item.id}
                    >
                        <div className={cx('shop-item')}>
                            <Image
                                className={cx('shop-img')}
                                src={item.image}
                            />
                            <div className={cx('overlay')}></div>
                            <div className={cx('body')}>
                                <h3 className={cx('name')}>{item.name}</h3>
                                <Rating
                                    value={item.rating}
                                    readOnly
                                    sx={{
                                        marginBottom: '12px',

                                        '& .MuiSvgIcon-root': {
                                            width: '18px',
                                            height: '18px',
                                        },
                                    }}
                                />
                                <div className={cx('info')}>
                                    <RoomIcon
                                        sx={{
                                            width: '17px',
                                            height: '17px',
                                            marginTop: '4px',
                                        }}
                                    />
                                    <p>{item.address}</p>
                                </div>
                                <div className={cx('info')}>
                                    <PhoneIcon
                                        sx={{
                                            width: '17px',
                                            height: '17px',
                                            marginTop: '4px',
                                        }}
                                    />
                                    <p>{item.phone_number}</p>
                                </div>
                                <Image
                                    className={cx('shop-avartar')}
                                    src={item.avartar}
                                />
                            </div>
                            <div className={cx('btn')}>
                                <Link to={`/shop/${item.id}`}>
                                    <Button
                                        sx={{
                                            minWidth: '35px',
                                            maxWidth: '35px',
                                            height: '35px',
                                            margin: '4px 8px 4px 0',
                                            borderRadius: '999px',
                                            color: 'var(--primary-color)',

                                            '&:hover': {
                                                backgroundColor:
                                                    'rgba(210, 63, 87, 0.04)',
                                            },
                                        }}
                                    >
                                        <EastIcon
                                            sx={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default AllShopItem;
