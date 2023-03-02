import styles from './BrandsList.module.scss';

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
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@material-ui/core/TableContainer';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const BrandHeader = [
    {
        title: 'Id',
    },
    {
        title: 'Name',
    },
    {
        title: 'Logo',
    },
    {
        title: 'Featured',
    },
    {
        title: 'Actions',
    },
];

function BrandsList({ DATA, showBrands, handleShowAdd }) {
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
                display: showBrands,
            }}
        >
            <h3 className={cx('heading')}>Product Brands</h3>
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
                        placeholder="Search Brands..."
                    />
                </div>
                <Button
                    onClick={handleShowAdd}
                    sx={{
                        height: '44px',
                        color: 'var(--white)',
                        padding: '6px 16px',
                        fontSize: '1.5rem',
                        backgroundColor: 'rgb(78, 151, 253)',
                        boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
                        textTransform: 'capitalize',

                        '&:hover': {
                            backgroundColor: 'rgb(78, 151, 253)',
                            opacity: '0.8',
                        },
                    }}
                    startIcon={<AddIcon />}
                >
                    Add Brands
                </Button>
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
                                {BrandHeader.map((item, index) => {
                                    return (
                                        <TableCell
                                            key={index}
                                            align="right"
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '1.4rem',
                                                padding: '12px 16px 12px 24px',
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
                                                textAlign: 'center',
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <span className={cx('id')}>
                                                {item.id}
                                            </span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: 'center',
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <span className={cx('name')}>
                                                {item.name}
                                            </span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: 'center',
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <Image
                                                className={cx('brand-image')}
                                                src={item.image}
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: 'center',
                                                padding: '12px 16px 12px 24px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <div
                                                className={cx(
                                                    'form-switch',
                                                    'switch',
                                                )}
                                            >
                                                <input
                                                    className={cx(
                                                        'form-check-input',
                                                        'check-input',
                                                    )}
                                                    type="checkbox"
                                                    role="switch"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                textAlign: 'center',
                                                padding: '12px 16px 12px 10px',
                                                borderBottom:
                                                    '1px solid #e3e9ef',
                                            }}
                                        >
                                            <Button
                                                sx={{
                                                    minWidth: '35px',
                                                    height: '35px',
                                                    borderRadius: '999px',
                                                    color: 'rgb(125, 135, 156)',
                                                    marginLeft: '10px',

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

BrandsList.propTypes = {
    DATA: PropTypes.array,
    showBrands: PropTypes.string,
    handleShowAdd: PropTypes.func,
};

export default BrandsList;
