import styles from './Categories.module.scss';
import CategoryList from '~/admin/pages/Categories/components/CategoryList';
import AddCategory from '~/admin/pages/Categories/components/AddCategory';
import EditCategory from '~/admin/pages/Categories/components/EditCategory';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DATA = [
    {
        id: '#1',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#2',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#3',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#4',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#5',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#6',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#7',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#8',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#9',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#10',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#11',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#12',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#13',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#14',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#15',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#16',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#17',
        name: 'Laptop',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
    {
        id: '#18',
        name: 'Boston Round Cream',
        image: 'https://bazaar.ui-lib.com/assets/images/Gift%20Shop/Product%201.png',
        featured: false,
    },
];

function Categories() {
    const [showCategory, setShowCategory] = useState('block');
    const [showAdd, setShowAdd] = useState('none');
    const [showEdit, setShowEdit] = useState('none');

    const handleShowAdd = () => {
        setShowCategory('none');
        setShowAdd('block');
    };

    const handleShowCategory = () => {
        setShowAdd('none');
        setShowEdit('none');
        setShowCategory('block');
    };

    const handleShowEdit = () => {
        setShowCategory('none');
        setShowAdd('none');
        setShowEdit('block');
    };

    return (
        <div className={cx('wrapper')}>
            <CategoryList
                DATA={DATA}
                showCategory={showCategory}
                handleShowAdd={handleShowAdd}
                handleShowEdit={handleShowEdit}
            />
            <AddCategory
                showAdd={showAdd}
                handleShowCategory={handleShowCategory}
            />
            <EditCategory
                showEdit={showEdit}
                handleShowCategory={handleShowCategory}
            />
        </div>
    );
}

export default Categories;
