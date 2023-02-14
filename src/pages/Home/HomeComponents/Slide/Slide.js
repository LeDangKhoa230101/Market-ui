import styles from './Slide.module.scss';
import Image from '~/components/Image/Image';
import classNames from 'classnames/bind';

import Carousel from 'react-material-ui-carousel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from 'react-responsive';
import { createTheme } from '@mui/material';

const cx = classNames.bind(styles);

const SLIDES = [
    {
        title: '50% Off For Your First Shopping',
        description:
            'A Generic, extendible Carousel UI component for React using Material UI. It switches between given children using a smooth animation.',
        image: 'https://bazaar.ui-lib.com/assets/images/products/nike-black.png',
    },
    {
        title: '50% Off For Your First Shopping',
        description:
            'A Generic, extendible Carousel UI component for React using Material UI. It switches between given children using a smooth animation.',
        image: 'https://bazaar.ui-lib.com/assets/images/products/nike-black.png',
    },
];

function Slide() {
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

    const theme = createTheme({
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            },
        },
    });

    return (
        <div className={cx('slide')}>
            <Carousel
                autoPlay={false}
                animation="slide"
                duration={400}
                navButtonsProps={{
                    style: {
                        display: 'none',
                    },
                }}
                indicatorIconButtonProps={{
                    style: {
                        color: '#0F3460',
                    },
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        border: '1px solid #0F3460',
                    },
                }}
            >
                {SLIDES.map((slide, index) => (
                    <Grid
                        key={index}
                        className={cx('slide-item')}
                        container
                        spacing={3}
                    >
                        <Grid item lg={6} sm={5} xs={12}>
                            <div className={cx('silde-item-body')}>
                                <h3 className={cx('slide-title')}>
                                    {slide.title}
                                </h3>
                                <span className={cx('slide-des')}>
                                    {slide.description}
                                </span>
                                <Button
                                    className={cx('shop-btn')}
                                    sx={{
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        color: 'var(--white)',
                                        backgroundColor: 'var(--primary-color)',
                                    }}
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </Grid>
                        <Grid item lg={6} sm={5} xs={12}>
                            <Image
                                className={cx('slide-img')}
                                alt="Image Slide"
                                src={slide.image}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Carousel>
        </div>
    );
}

export default Slide;
