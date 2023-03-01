import styles from './Customers.module.scss';
import CustomersList from '~/admin/pages/Customers/components/CustomersList';
import EditCustomer from '~/admin/pages/Customers/components/EditCustomer';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DATA = [
    {
        id: '#1',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#2',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#3',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#4',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#5',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#6',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#7',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#8',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#9',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#10',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#11',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#12',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#13',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#14',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#15',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#16',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#17',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
    {
        id: '#18',
        name: 'Dominic Moss',
        image: 'https://bazaar.ui-lib.com/assets/images/avatars/002-woman.svg',
        phone: '0393839448',
        email: 'dasd@dmaks.dsk',
        wallet: '11.345,25',
        noOfOrder: '03',
    },
];

function Customers() {
    const [showCustomer, setShowCustomer] = useState('block');
    const [showEdit, setShowEdit] = useState('none');

    const handleShowEdit = () => {
        setShowCustomer('none');
        setShowEdit('block');
    };

    const handleShowCustomer = () => {
        setShowEdit('none');
        setShowCustomer('block');
    };

    return (
        <div className={cx('wrapper')}>
            <CustomersList
                DATA={DATA}
                showCustomer={showCustomer}
                handleShowEdit={handleShowEdit}
            />
            <EditCustomer
                showEdit={showEdit}
                handleShowCustomer={handleShowCustomer}
            />
        </div>
    );
}

export default Customers;
