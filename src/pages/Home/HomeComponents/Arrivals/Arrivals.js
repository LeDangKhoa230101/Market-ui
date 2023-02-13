import styles from './Arrivals.module.scss';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from '~/components/Image/Image';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const datas = [
    {
        name: 'Sunglass',
        price: '150,00',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    },
    {
        name: 'Sunglass',
        price: '150,00',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    },
    {
        name: 'Sunglass',
        price: '150,00',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    },
    {
        name: 'Sunglass',
        price: '150,00',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    },
    {
        name: 'Sunglass',
        price: '150,00',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    },
    {
        name: 'Sunglass',
        price: '150,00',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=1920&q=75',
    },
];

function Arrivals() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 787px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 786px)',
    });

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
    }));
    return (
        <div className={cx('arrival')}>
            <TitleSection
                to={'new-arrival'}
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
                    {datas.map((item, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={
                                    isDesktop ? 2 : isTabletAndMobile ? 4 : null
                                }
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                }}
                            >
                                <div className={cx('img-container')}>
                                    <Image
                                        className={cx('arrival-img')}
                                        src={item.image}
                                    />
                                    <div className={cx('overlay')}></div>
                                </div>
                                <span className={cx('arrival-name')}>
                                    {item.name}
                                </span>
                                <span className={cx('arrival-price')}>
                                    {item.price} US$
                                </span>
                            </Grid>
                        );
                    })}
                </Grid>
            </Item>
        </div>
    );
}

export default Arrivals;
