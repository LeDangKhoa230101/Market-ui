import styles from './Brands.module.scss';
import BrandsList from '~/admin/pages/Brands/components/BrandsList';
import AddBrands from '~/admin/pages/Brands/components/AddBrands';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DATA = [
    {
        id: '#1',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#2',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#3',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#4',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#5',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#6',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#7',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#8',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#9',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#10',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#11',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#12',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#13',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#14',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#15',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#16',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#17',
        name: 'Dell',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#18',
        name: 'Acer',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
];

function Brands() {
    const [showBrands, setShowBrands] = useState('block');
    const [showAdd, setShowAdd] = useState('none');

    const handleShowAdd = () => {
        setShowBrands('none');
        setShowAdd('block');
    };

    const handleShowBrands = () => {
        setShowAdd('none');
        setShowBrands('block');
    };

    return (
        <div className={cx('wrapper')}>
            <BrandsList
                DATA={DATA}
                showBrands={showBrands}
                handleShowAdd={handleShowAdd}
            />
            <AddBrands showAdd={showAdd} handleShowBrands={handleShowBrands} />
        </div>
    );
}

export default Brands;
