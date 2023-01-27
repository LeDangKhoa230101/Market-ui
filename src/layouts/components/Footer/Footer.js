import styles from './Footer.module.scss';
import images from '~/assets/image';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGoogle,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(0),
    }));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <Grid container spacing={3} sx={{ padding: '80px 0' }}>
                    <Grid item xs={4}>
                        <Item>
                            <Image
                                className={cx('footer-logo')}
                                src={images.logoFooter}
                            />
                            <span className={cx('desc')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Auctor libero id et, in
                                gravida. Sit diam duis mauris nulla cursus. Erat
                                et lectus vel ut sollicitudin elit at amet.
                            </span>
                            <div className={cx('control')}>
                                <Button
                                    sx={{
                                        backgroundColor: '#161d2b',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 11px',
                                        color: 'var(--white)',
                                        textTransform: 'capitalize',
                                        marginRight: '20px',
                                    }}
                                >
                                    <Image
                                        className={cx('control-img')}
                                        src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Logo_Play_512px_clr_nGVTgYY.max-600x600.png"
                                    />
                                    <div>
                                        <span className={cx('footer-text')}>
                                            Get it onn
                                        </span>
                                        <span className={cx('footer-app')}>
                                            Google Play
                                        </span>
                                    </div>
                                </Button>
                                <Button
                                    sx={{
                                        backgroundColor: '#161d2b',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '12px 11px',
                                        color: 'var(--white)',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    <Image
                                        className={cx('control-img')}
                                        src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
                                    />
                                    <div>
                                        <span className={cx('footer-text')}>
                                            Download on the
                                        </span>
                                        <span className={cx('footer-app')}>
                                            App Store
                                        </span>
                                    </div>
                                </Button>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item xs={2}>
                        <Item>
                            <h3 className={cx('title')}>About Us</h3>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>Careers</li>
                                <li className={cx('item')}>Our Stores</li>
                                <li className={cx('item')}>Our Cares</li>
                                <li className={cx('item')}>
                                    Terms & Conditions
                                </li>
                                <li className={cx('item')}>Privacy Policy</li>
                            </ul>
                        </Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>
                            <h3 className={cx('title')}>Customer Care</h3>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>Help Center</li>
                                <li className={cx('item')}>How to Buy</li>
                                <li className={cx('item')}>Track Your Order</li>
                                <li className={cx('item')}>
                                    Corporate & Bulk Purchasing
                                </li>
                                <li className={cx('item')}>
                                    Returns & Refunds
                                </li>
                            </ul>
                        </Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>
                            <h3 className={cx('title')}>Contact Us</h3>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>
                                    70 Washington Square South, New York, NY
                                    10012, United States
                                </li>
                                <li className={cx('item')}>
                                    Email: uilib.help@gmail.com
                                </li>
                                <li className={cx('item')}>
                                    Phone: +1 1123 456 780
                                </li>
                            </ul>
                            <ul className={cx('list-icon')}>
                                <li>
                                    <Button
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        sx={{
                                            minWidth: '32px',
                                            height: '32px',
                                            backgroundColor: 'rgba(0,0,0,0.2)',
                                            borderRadius: '999px',
                                            marginRight: '8px',
                                            color: 'var(--white)',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('icon-app')}
                                            icon={faFacebookF}
                                        />
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        href="https://www.google.com/search?q=twitter&oq=tw&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j69i57j0i131i433i512j69i60l4.777j0j1&sourceid=chrome&ie=UTF-8"
                                        target="_blank"
                                        sx={{
                                            minWidth: '32px',
                                            height: '32px',
                                            backgroundColor: 'rgba(0,0,0,0.2)',
                                            borderRadius: '999px',
                                            marginRight: '8px',
                                            color: 'var(--white)',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('icon-app')}
                                            icon={faTwitter}
                                        />
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        sx={{
                                            minWidth: '32px',
                                            height: '32px',
                                            backgroundColor: 'rgba(0,0,0,0.2)',
                                            borderRadius: '999px',
                                            marginRight: '8px',
                                            color: 'var(--white)',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('icon-app')}
                                            icon={faYoutube}
                                        />
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        href="https://www.google.com.vn/?hl=vi"
                                        target="_blank"
                                        sx={{
                                            minWidth: '32px',
                                            height: '32px',
                                            backgroundColor: 'rgba(0,0,0,0.2)',
                                            borderRadius: '999px',
                                            marginRight: '8px',
                                            color: 'var(--white)',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('icon-app')}
                                            icon={faGoogle}
                                        />
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        sx={{
                                            minWidth: '32px',
                                            height: '32px',
                                            backgroundColor: 'rgba(0,0,0,0.2)',
                                            borderRadius: '999px',
                                            marginRight: '8px',
                                            color: 'var(--white)',
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            className={cx('icon-app')}
                                            icon={faInstagram}
                                        />
                                    </Button>
                                </li>
                            </ul>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
