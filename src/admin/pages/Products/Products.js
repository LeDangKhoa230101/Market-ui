import styles from './Products.module.scss';
import ProductList from '~/admin/pages/Products/components/ProductList';
import AddProduct from '~/admin/pages/Products/components/AddProduct';
import EditProduct from '~/admin/pages/Products/components/EditProduct';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DATA = [
    {
        id: '#1',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#2',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: true,
    },
    {
        id: '#3',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#4',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#5',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: true,
    },
    {
        id: '#6',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#7',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#8',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: true,
    },
    {
        id: '#9',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#10',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#11',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: true,
    },
    {
        id: '#12',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#13',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#14',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: true,
    },
    {
        id: '#15',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#16',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
    {
        id: '#17',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: true,
    },
    {
        id: '#18',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/products/samsung.png',
        category: 'Laptop',
        brandImage:
            'https://bazaar.ui-lib.com/assets/images/brands/samsung.png',
        price: '2502,00',
        publish: false,
    },
];

function Products() {
    const [showProduct, setShowProduct] = useState('block');
    const [showAdd, setShowAdd] = useState('none');
    const [showEdit, setShowEdit] = useState('none');

    const handleShowAdd = () => {
        setShowProduct('none');
        setShowAdd('block');
    };

    const handleShowProduct = () => {
        setShowAdd('none');
        setShowEdit('none');
        setShowProduct('block');
    };

    const handleShowEdit = () => {
        setShowAdd('none');
        setShowProduct('none');
        setShowEdit('block');
    };

    return (
        <div className={cx('wrapper')}>
            <ProductList
                DATA={DATA}
                showProduct={showProduct}
                handleShowAdd={handleShowAdd}
                handleShowEdit={handleShowEdit}
            />
            <AddProduct
                showAdd={showAdd}
                handleShowProduct={handleShowProduct}
            />
            <EditProduct
                showEdit={showEdit}
                handleShowProduct={handleShowProduct}
            />
        </div>
    );
}

export default Products;
