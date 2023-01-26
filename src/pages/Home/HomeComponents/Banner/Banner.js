import styles from './Banner.module.scss';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function Banner() {
    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(0),
    }));
    return (
        <div className={cx('banner')}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={4}
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
                    xs={8}
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
