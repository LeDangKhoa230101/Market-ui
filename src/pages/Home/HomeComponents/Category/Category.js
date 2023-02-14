import styles from './Category.module.scss';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import WidgetsIcon from '@mui/icons-material/Widgets';
import Image from '~/components/Image/Image';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const CATE_LIST = [
    {
        name: 'Laptop',
        image: 'https://fptshop.com.vn/Uploads/Originals/2022/8/26/637971384442849961_asus-vivobook-m1503-bac-dd.jpg',
        to: '/',
    },
    {
        name: 'Mobile Phone',
        image: 'https://m.media-amazon.com/images/I/71AvQd3VzqL._SX569_.jpg',
        to: '/',
    },
    {
        name: 'Camera',
        image: 'https://www.shutterstock.com/image-photo/camera-260nw-610909205.jpg',
        to: '/',
    },
    {
        name: 'Headphone',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F35.beatsbluetoothearpohones.png&w=1920&q=75',
        to: '/',
    },
    {
        name: 'Accessories Computer',
        image: 'https://salt.tikicdn.com/ts/product/aa/e7/92/f6767d13b63b70c89e2e39360cff84c0.jpg',
        to: '/',
    },
    {
        name: 'Music Speaker',
        image: 'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F1.Siri2020.png&w=1920&q=75',
        to: '/',
    },
];

function Category() {
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
        padding: theme.spacing(2),
        backgroundColor: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
        cursor: 'pointer',
        transition: 'all ease-in-out 0.3s',
        '&:hover': {
            boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)',
        },
    }));

    return (
        <div className={cx('category')}>
            <TitleSection
                icon={
                    <WidgetsIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginTop: '2px',
                            color: 'var(--primary-color)',
                        }}
                    />
                }
                title={'Categories'}
            />
            <Grid container spacing={2}>
                {CATE_LIST.map((item, index) => {
                    return (
                        <Grid
                            item
                            xs={
                                isDesktop
                                    ? 2
                                    : isTablet
                                    ? 4
                                    : isMobile
                                    ? 6
                                    : null
                            }
                            key={index}
                        >
                            <Item>
                                <Image
                                    className={cx('cate-img')}
                                    src={item.image}
                                />
                                <span className={cx('cate-name')}>
                                    {item.name}
                                </span>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Category;
