import styles from './TopRating.module.scss';
import TitleSection from '~/components/TitleSection';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Rating } from '@mui/material';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const datas = [
    {
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75',
        name: 'Camera',
        price: '3,333,00',
    },
    {
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75',
        name: 'Camera',
        price: '3,333,00',
    },
    {
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75',
        name: 'Camera',
        price: '3,333,00',
    },
    {
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=1920&q=75',
        name: 'Camera',
        price: '3,333,00',
    },
];

function TopRating() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
    }));

    return (
        <Grid item xs={isDesktop ? 6 : isTabletAndMobile ? 12 : null}>
            <TitleSection
                to={'top-rating'}
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
                    {datas.map((item, index) => {
                        return (
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 3
                                        : isTablet
                                        ? 3
                                        : isMobile
                                        ? 6
                                        : null
                                }
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                }}
                            >
                                <div className={cx('container-img-top-rating')}>
                                    <Image
                                        className={cx('top-rating-img')}
                                        src={item.image}
                                    />
                                    <div className={cx('overlay')}></div>
                                </div>

                                <Rating value={5} size="large" />
                                <span className={cx('top-rating-name')}>
                                    {item.name}
                                </span>
                                <span className={cx('top-rating-price')}>
                                    {item.price} US$
                                </span>
                            </Grid>
                        );
                    })}
                </Grid>
            </Item>
        </Grid>
    );
}

export default TopRating;
