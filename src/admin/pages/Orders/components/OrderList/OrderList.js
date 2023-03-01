import styles from './OrderList.module.scss';

import classNames from 'classnames/bind';
import Pagination from '~/admin/components/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function OrderList({ DATA, showOrders, handleShowDetail }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(5);

    const indexOfLast = currentPage * limit;
    const indexOfFirst = indexOfLast - limit;
    const currentData = DATA?.slice(indexOfFirst, indexOfLast);

    const onPageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <div
            style={{
                display: showOrders,
            }}
        >
            <h3 className={cx('heading')}>Orders</h3>
            {/* Section */}
            <div className={cx('section')}>
                {/* Search */}
                <div className={cx('section-search')}>
                    <SearchIcon
                        sx={{
                            width: '20px',
                            height: '20px',
                            color: '#AEB4BE',
                        }}
                    />
                    <input
                        className={cx('section-search-input')}
                        type="text"
                        placeholder="Search Order..."
                    />
                </div>
            </div>
            {/* Section */}
            <div className={cx('table')}>
                <Table>
                    <TableHead
                        sx={{
                            backgroundColor: '#f3f5f9',
                        }}
                    >
                        <TableRow>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Order ID
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Qty
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Purchase Date
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Billing Address
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Amount
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Status
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px 16px 12px 24px',
                                }}
                            >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData?.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 24px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <span className={cx('id')}>
                                            {item.id}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 24px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <span className={cx('qty')}>
                                            {item.qty}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 24px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <span className={cx('purchase-date')}>
                                            {item.purchasedate}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 24px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <span className={cx('billing-address')}>
                                            {item.billaddress}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 24px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <span className={cx('amount')}>
                                            {item.amount} US$
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 24px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <span
                                            className={cx(
                                                'status',
                                                item.status === 'Delivered'
                                                    ? 'delivered'
                                                    : item.status === 'Pending'
                                                    ? 'pending'
                                                    : item.status ===
                                                      'Processing'
                                                    ? 'processing'
                                                    : item.status ===
                                                      'Cancelled'
                                                    ? 'cancelled'
                                                    : null,
                                            )}
                                        >
                                            {item.status}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            padding: '12px 16px 12px 10px',
                                            borderBottom: '1px solid #e3e9ef',
                                        }}
                                    >
                                        <Button
                                            onClick={handleShowDetail}
                                            sx={{
                                                minWidth: '35px',
                                                height: '35px',
                                                borderRadius: '999px',
                                                color: 'rgb(125, 135, 156)',
                                                marginLeft: '4px',

                                                '&:hover': {
                                                    backgroundColor:
                                                        'rgba(0, 0, 0, 0.04)',
                                                    color: 'rgb(78, 151, 253)',
                                                },
                                            }}
                                        >
                                            <RemoveRedEyeIcon
                                                sx={{
                                                    minWidth: '20px',
                                                    height: '20px',
                                                }}
                                            />
                                        </Button>
                                        <Button
                                            sx={{
                                                minWidth: '35px',
                                                height: '35px',
                                                borderRadius: '999px',
                                                color: 'rgb(125, 135, 156)',

                                                '&:hover': {
                                                    backgroundColor:
                                                        'rgba(0, 0, 0, 0.04)',
                                                    color: 'rgb(78, 151, 253)',
                                                },
                                            }}
                                        >
                                            <DeleteIcon
                                                sx={{
                                                    minWidth: '20px',
                                                    height: '20px',
                                                }}
                                            />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                {/* Pagination */}
                {currentData && (
                    <Pagination
                        className={cx('paginate')}
                        totalCount={DATA?.length}
                        limit={limit}
                        onPageChange={onPageChange}
                    />
                )}
            </div>
        </div>
    );
}

OrderList.propTypes = {
    DATA: PropTypes.array,
    showOrders: PropTypes.string,
    handleShowDetail: PropTypes.func,
};

export default OrderList;
