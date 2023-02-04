import styles from './DetailShopHeader.module.scss';
import Image from '~/components/Image/Image';
import { facebook, twitter, youtobe, instagram } from '~/assets/icons/icons';

import classNames from 'classnames/bind';
import Rating from '@mui/material/Rating';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DetailShopHeader({ data }) {
    return (
        <div className={cx('header')}>
            <div
                style={{
                    height: '202px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    background: `url(${data.image}) center / cover`,
                }}
            ></div>
            <div className={cx('body')}>
                <Image className={cx('avartar')} src={data.avartar} />
                <div className={cx('section')}>
                    <h3>{data.name}</h3>
                    <ul>
                        <li>
                            <Link>{facebook}</Link>
                        </li>
                        <li>
                            <Link>{twitter}</Link>
                        </li>
                        <li>
                            <Link>{youtobe}</Link>
                        </li>
                        <li>
                            <Link>{instagram}</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('infomation')}>
                    <div className={cx('info-body')}>
                        <Rating
                            value={data.rating}
                            readOnly
                            size="large"
                            sx={{
                                marginBottom: '16px',
                            }}
                        />
                        <div className={cx('descrip')}>
                            <RoomIcon
                                sx={{
                                    width: '18px',
                                    height: '18px',
                                    marginBottom: '8px',
                                }}
                            />
                            <p>{data.address}</p>
                        </div>
                        <div className={cx('descrip')}>
                            <PhoneIcon
                                sx={{
                                    width: '18px',
                                    height: '18px',
                                    marginBottom: '8px',
                                }}
                            />
                            <p>{data.phone_number}</p>
                        </div>
                    </div>
                    <Button
                        sx={{
                            fontSize: '1.4rem',
                            fontWeight: '500',
                            textTransform: 'capitalize',
                            padding: '5px 15px',
                            color: 'var(--primary-color)',
                            border: '1px solid rgba(210, 63, 87, 0.5)',

                            '&:hover': {
                                backgroundColor: 'rgba(210, 63, 87, 0.04)',
                                border: '1px solid var(--primary-color)',
                            },
                        }}
                    >
                        Contact vendor
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DetailShopHeader;
