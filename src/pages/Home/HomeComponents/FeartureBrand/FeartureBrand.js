import styles from './FeartureBrand.module.scss';
import Image from '~/components/Image/Image';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import StarsIcon from '@mui/icons-material/Stars';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function FeartureBrand() {
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
                to={'feature-brand'}
                icon={
                    <StarsIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginTop: '2px',
                            color: '#fab400',
                        }}
                    />
                }
                title={'Featured Brands'}
            />
            <Item>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            className={cx('feature-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=1920&q=75"
                        />
                        <span className={cx('feature-name')}>
                            London Britches
                        </span>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            className={cx('feature-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=1920&q=75"
                        />
                        <span className={cx('feature-name')}>
                            London Britches
                        </span>
                    </Grid>
                </Grid>
            </Item>
        </Grid>
    );
}

export default FeartureBrand;
