import styles from './CategoryTabletMobile.module.scss';
import Image from '~/components/Image/Image';
import images from '~/assets/image';

import classNames from 'classnames/bind';
import { Grid } from '@mui/material';

const cx = classNames.bind(styles);

const category = [
    {
        image: images.laptop,
        name: 'Laptop',
        to: '/',
    },
    {
        image: images.mobile,
        name: 'Mobile Phone',
        to: '/',
    },
    {
        image: images.camera,
        name: 'Camera',
        to: '/',
    },
    {
        image: images.headphone,
        name: 'Headphone',
        to: '/',
    },
    {
        image: images.accessories,
        name: 'Accessories Computer',
        to: '/',
    },
    {
        image: images.speaker,
        name: 'Music Speaker',
        to: '/',
    },
];

function CategoryTabletMobile() {
    return (
        <div className={cx('drawer-menu')}>
            <Grid container spacing={4}>
                {category.map((item, index) => {
                    return (
                        <Grid key={index} item xs={4}>
                            <div className={cx('drawer-item')}>
                                <Image
                                    className={cx('drawer-img')}
                                    src={item.image}
                                />
                                <span className={cx('drawer-name')}>
                                    {item.name}
                                </span>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default CategoryTabletMobile;
