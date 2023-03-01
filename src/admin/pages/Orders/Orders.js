import styles from './Orders.module.scss';
import OrderList from '~/admin/pages/Orders/components/OrderList';
import OrderDetail from '~/admin/pages/Orders/components/OrderDetail';

import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DATA = [
    {
        id: '#1',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#2',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Cancelled',
    },
    {
        id: '#3',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#4',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Cancelled',
    },
    {
        id: '#5',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#6',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Pending',
    },
    {
        id: '#7',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#8',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Pending',
    },
    {
        id: '#9',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#10',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Processing',
    },
    {
        id: '#11',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Processing',
    },
    {
        id: '#12',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Processing',
    },
    {
        id: '#13',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#14',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#15',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#16',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#17',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
    {
        id: '#18',
        qty: '3',
        purchasedate: '10 Nov 2022',
        billaddress: 'Kelly Williams 777 Brockton Avenue, Abington MA 2351',
        amount: '350,00',
        status: 'Delivered',
    },
];

function Orders() {
    const [showOrders, setShowBrands] = useState('block');
    const [showDetail, setShowDetail] = useState('none');

    const handleShowDetail = () => {
        setShowBrands('none');
        setShowDetail('block');
    };

    const handleShowOrders = () => {
        setShowDetail('none');
        setShowBrands('block');
    };

    return (
        <div className={cx('wrapper')}>
            <OrderList
                DATA={DATA}
                showOrders={showOrders}
                handleShowDetail={handleShowDetail}
            />
            <OrderDetail
                showDetail={showDetail}
                handleShowOrders={handleShowOrders}
            />
        </div>
    );
}

export default Orders;
