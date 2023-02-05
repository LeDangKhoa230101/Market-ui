import styles from './SalePage.module.scss';
import SaleCateItem from './SalePageComponents/SaleCateItem';

import SaleLaptop from './SalePageComponents/SaleLaptop';
import SaleMobile from './SalePageComponents/SaleMobile';
import SaleCamera from './SalePageComponents/SaleCamera';
import SaleHeadphone from './SalePageComponents/SaleHeadphone';
import SaleAccessories from './SalePageComponents/SaleAccessories';
import SaleSpeaker from './SalePageComponents/SaleSpeaker';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import { Routes, Route } from 'react-router-dom';

const cx = classNames.bind(styles);

const CATE = [
    {
        name: 'Laptop',
        to: 'laptop',
        icon: (
            <LaptopMacOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Mobile Phone',
        to: 'mobile',
        icon: (
            <StayCurrentPortraitOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Camera',
        to: 'camera',
        icon: (
            <CameraAltOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Headphone',
        to: 'headphone',
        icon: (
            <HeadsetMicOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Accessories Computer',
        to: 'accessories',
        icon: (
            <MouseOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
    {
        name: 'Music Speaker',
        to: 'speaker',
        icon: (
            <SpeakerOutlinedIcon
                sx={{
                    width: '40px',
                    height: '40px',
                    color: 'rgb(15, 52, 96)',
                }}
            />
        ),
    },
];

function SalePage() {
    return (
        <div className={cx('wrapper-sale')}>
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    <span>Flash Deals,</span>
                    <span> Enjoy Upto 80% discounts</span>
                </div>
                {/* Category */}
                <Grid container spacing={3}>
                    {CATE.map((item, index) => {
                        return <SaleCateItem item={item} key={index} />;
                    })}
                </Grid>
                {/* Category */}
                <div className={cx('content')}>
                    <Routes>
                        <Route path="laptop" element={<SaleLaptop />} />
                        <Route path="mobile" element={<SaleMobile />} />
                        <Route path="camera" element={<SaleCamera />} />
                        <Route path="headphone" element={<SaleHeadphone />} />
                        <Route
                            path="accessories"
                            element={<SaleAccessories />}
                        />
                        <Route path="speaker" element={<SaleSpeaker />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default SalePage;
