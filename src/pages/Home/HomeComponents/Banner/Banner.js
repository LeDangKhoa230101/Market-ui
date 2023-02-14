import styles from './Banner.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function Banner() {
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

    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(0),
    }));
    return (
        <div className={cx('banner')}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={isDesktop ? 4 : isTablet ? 4 : isMobile ? 12 : null}
                    sx={{
                        cursor: 'not-allowed',
                    }}
                >
                    <Item>
                        <Image
                            className={cx('banner-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=1920&q=75"
                        />
                    </Item>
                </Grid>
                <Grid
                    item
                    xs={isDesktop ? 8 : isTablet ? 8 : isMobile ? 12 : null}
                    sx={{
                        cursor: 'not-allowed',
                    }}
                >
                    <Item>
                        <Image
                            className={cx('banner-img')}
                            src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=1920&q=75"
                        />
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Banner;
