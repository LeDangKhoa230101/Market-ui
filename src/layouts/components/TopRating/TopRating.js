import styles from './TopRating.scss';
import TitleSection from '~/components/TitleSection';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Rating } from '@mui/material';

const cx = classNames.bind(styles);

function TopRating() {
    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
        height: '229px',
    }));
    return (
        <Grid item xs={6}>
            <TitleSection
                icon={
                    <WorkspacePremiumOutlinedIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginTop: '2px',
                            color: '#fab400',
                        }}
                    />
                }
                title={'Top Ratings'}
            />
            <Item>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            className={cx('top-rating-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75"
                        />
                        <Rating value={5} />
                        <span className={cx('top-rating-name')}>Camera</span>
                        <span className={cx('top-rating-price')}>
                            3.300,00 US$
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            className={cx('top-rating-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75"
                        />
                        <Rating value={5} />
                        <span className={cx('top-rating-name')}>Camera</span>
                        <span className={cx('top-rating-price')}>
                            3.300,00 US$
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            className={cx('top-rating-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75"
                        />
                        <Rating value={5} />
                        <span className={cx('top-rating-name')}>Camera</span>
                        <span className={cx('top-rating-price')}>
                            3.300,00 US$
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            className={cx('top-rating-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75"
                        />
                        <Rating value={5} />
                        <span className={cx('top-rating-name')}>Camera</span>
                        <span className={cx('top-rating-price')}>
                            3.300,00 US$
                        </span>
                    </Grid>
                </Grid>
            </Item>
        </Grid>
    );
}

export default TopRating;
