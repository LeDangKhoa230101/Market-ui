import styles from './Arrivals.scss';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from '~/components/Image/Image';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';

const cx = classNames.bind(styles);

function Arrivals() {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
    }));
    return (
        <div className={cx('arrival')}>
            <TitleSection
                icon={
                    <FiberNewRoundedIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginTop: '2px',
                            color: '#68c944',
                        }}
                    />
                }
                title={'New Arrivals'}
            />
            <Item>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <div className={cx('img-container')}>
                            <Image
                                className={cx('arrival-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75"
                            />
                            <div className={cx('overlay')}></div>
                        </div>
                        <span className={cx('arrival-name')}>Sunglass</span>
                        <span className={cx('arrival-price')}>150,00 US$</span>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <div className={cx('img-container')}>
                            <Image
                                className={cx('arrival-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75"
                            />
                            <div className={cx('overlay')}></div>
                        </div>
                        <span className={cx('arrival-name')}>Sunglass</span>
                        <span className={cx('arrival-price')}>150,00 US$</span>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <div className={cx('img-container')}>
                            <Image
                                className={cx('arrival-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75"
                            />
                            <div className={cx('overlay')}></div>
                        </div>
                        <span className={cx('arrival-name')}>Sunglass</span>
                        <span className={cx('arrival-price')}>150,00 US$</span>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <div className={cx('img-container')}>
                            <Image
                                className={cx('arrival-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75"
                            />
                            <div className={cx('overlay')}></div>
                        </div>
                        <span className={cx('arrival-name')}>Sunglass</span>
                        <span className={cx('arrival-price')}>150,00 US$</span>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <div className={cx('img-container')}>
                            <Image
                                className={cx('arrival-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75"
                            />
                            <div className={cx('overlay')}></div>
                        </div>
                        <span className={cx('arrival-name')}>Sunglass</span>
                        <span className={cx('arrival-price')}>150,00 US$</span>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <div className={cx('img-container')}>
                            <Image
                                className={cx('arrival-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75"
                            />
                            <div className={cx('overlay')}></div>
                        </div>
                        <span className={cx('arrival-name')}>Sunglass</span>
                        <span className={cx('arrival-price')}>150,00 US$</span>
                    </Grid>
                </Grid>
            </Item>
        </div>
    );
}

export default Arrivals;
