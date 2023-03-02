import styles from './CustomersList.module.scss';

import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import Pagination from '~/admin/components/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import PropTypes from 'prop-types';

import TableContainer from '@material-ui/core/TableContainer';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const CustomerHeader = [
    {
        title: 'Name',
    },
    {
        title: 'Phone',
    },
    {
        title: 'Email',
    },
    {
        title: 'Wallet Balance',
    },
    {
        title: 'No Of Orders',
    },
    {
        title: 'Actions',
    },
];

function CustomersList({ DATA, showCustomer, handleShowEdit }) {
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
                display: showCustomer,
            }}
        >
            <h3 className={cx('heading')}>Customers</h3>
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
                        placeholder="Search Customer..."
                    />
                </div>
            </div>
            {/* Section */}
            <div className={cx('table')}>
                <TableContainer component={Box}>
                    <Table>
                        <TableHead
                            sx={{
                                backgroundColor: '#f3f5f9',
                            }}
                        >
                            <TableRow>
                                {CustomerHeader.map((item, index) => {
                                    return (
                                        <TableCell
                                            key={index}
                                            align="right"
                                            sx={{
                                                fontSize: '1.4rem',
                                                padding: '12px 16px 12px 24px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {item.title}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentData?.map((item, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell
                                            sx={{
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <div className={cx('name')}>
                                                <Image src={item.image} />
                                                <span>{item.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <span className={cx('phone')}>
                                                {item.phone}
                                            </span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <span className={cx('email')}>
                                                {item.email}
                                            </span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <span className={cx('wallet')}>
                                                {item.wallet} US$
                                            </span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <span className={cx('noOfOrder')}>
                                                {item.noOfOrder}
                                            </span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '12px 16px 12px 10px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Button
                                                onClick={handleShowEdit}
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
                                                <EditIcon
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
                </TableContainer>

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

CustomersList.propTypes = {
    DATA: PropTypes.array,
    showCustomer: PropTypes.string,
    handleShowEdit: PropTypes.func,
};

export default CustomersList;
