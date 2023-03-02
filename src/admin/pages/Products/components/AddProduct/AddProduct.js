import styles from './AddProduct.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function AddProduct({ showAdd, handleShowProduct }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) =>
            newImageUrls.push(URL.createObjectURL(image)),
        );
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div
            style={{
                display: showAdd,
            }}
        >
            <h3 className={cx('heading')}>Add New Product</h3>
            <Button
                onClick={handleShowProduct}
                sx={{
                    fontSize: '1.4rem',
                    backgroundColor: 'rgb(78, 151, 253)',
                    color: 'var(--white)',
                    padding: '6px 16px',
                    textTransform: 'capitalize',
                    boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
                    '&:hover': {
                        backgroundColor: 'rgb(39, 86, 182)',
                        boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px',
                    },
                }}
            >
                Go To Back
            </Button>

            <Grid container>
                <Grid item xs={12}>
                    <div className={cx('container')}>
                        <Grid container spacing={3}>
                            {/* Section 1 */}
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 6
                                        : isTablet
                                        ? 6
                                        : isMobile
                                        ? 12
                                        : null
                                }
                            >
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiFormLabel-root': {
                                            fontSize: '1.4rem',
                                        },
                                        '& .MuiInputBase-root': {
                                            fontSize: '1.4rem',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 6
                                        : isTablet
                                        ? 6
                                        : isMobile
                                        ? 12
                                        : null
                                }
                            >
                                <TextField
                                    fullWidth
                                    label="Category"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiFormLabel-root': {
                                            fontSize: '1.4rem',
                                        },
                                        '& .MuiInputBase-root': {
                                            fontSize: '1.4rem',
                                        },
                                    }}
                                />
                            </Grid>
                            {/* Section 2 */}
                            <Grid item xs={12}>
                                <div className={cx('upload-image')}>
                                    <input
                                        accept="image/*,.png,.gif,.jpeg,.jpg"
                                        type="file"
                                        className={cx('upload-input')}
                                        onChange={onImageChange}
                                    />
                                    <h5>Drag & drop product image here</h5>
                                    <span className={cx('upload-or')}>OR</span>
                                    <Button
                                        sx={{
                                            position: 'relative',
                                            margin: '32px 0',
                                            padding: '5px 32px',
                                            color: '#4E97FD',
                                            fontWeight: '500',
                                            fontSize: '1.4rem',
                                            textTransform: 'capitalize',
                                            border: '1px solid rgba(78, 151, 253, 0.5)',
                                        }}
                                    >
                                        Select File
                                        <input
                                            style={{
                                                position: 'absolute',
                                                inset: '0',
                                                opacity: '0',
                                                cursor: 'pointer',
                                            }}
                                            onChange={onImageChange}
                                            accept="image/*,.png,.gif,.jpeg,.jpg"
                                            type="file"
                                        />
                                    </Button>
                                    <p>Upload 280*280 image</p>
                                </div>
                            </Grid>
                            {/* Section 3 */}
                            <Grid item xs={12}>
                                {imageURLs.map((imageSrc, index) => {
                                    return (
                                        <Image
                                            key={index}
                                            src={imageSrc}
                                            alt="image-upload"
                                            className={cx('image')}
                                        />
                                    );
                                })}
                            </Grid>
                            {/* Section 4 */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Description"
                                    multiline
                                    rows={6}
                                    sx={{
                                        '& .MuiFormLabel-root': {
                                            fontSize: '1.6rem',
                                        },
                                        '& .MuiInputBase-root': {
                                            fontSize: '1.6rem',
                                        },
                                    }}
                                />
                            </Grid>
                            {/* Section 5 */}
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 6
                                        : isTablet
                                        ? 6
                                        : isMobile
                                        ? 12
                                        : null
                                }
                            >
                                <TextField
                                    fullWidth
                                    label="Regular Price"
                                    variant="outlined"
                                    type="number"
                                    sx={{
                                        '& .MuiFormLabel-root': {
                                            fontSize: '1.4rem',
                                        },
                                        '& .MuiInputBase-root': {
                                            fontSize: '1.4rem',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={
                                    isDesktop
                                        ? 6
                                        : isTablet
                                        ? 6
                                        : isMobile
                                        ? 12
                                        : null
                                }
                            >
                                <TextField
                                    fullWidth
                                    label="Sale Price"
                                    variant="outlined"
                                    type="number"
                                    sx={{
                                        '& .MuiFormLabel-root': {
                                            fontSize: '1.4rem',
                                        },
                                        '& .MuiInputBase-root': {
                                            fontSize: '1.4rem',
                                        },
                                    }}
                                />
                            </Grid>
                            {/* Section 6 */}
                            <Grid item xs={12}>
                                <Button
                                    sx={{
                                        fontSize: '1.4rem',
                                        backgroundColor: 'rgb(78, 151, 253)',
                                        color: 'var(--white)',
                                        padding: '6px 16px',
                                        textTransform: 'capitalize',
                                        boxShadow:
                                            'rgb(43 52 69 / 10%) 0px 4px 16px',
                                        '&:hover': {
                                            backgroundColor: 'rgb(39, 86, 182)',
                                            boxShadow:
                                                'rgb(3 0 71 / 1%) 0px 0px 28px',
                                        },
                                    }}
                                >
                                    Save Product
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

AddProduct.propTypes = {
    showAdd: PropTypes.string,
    handleShowProduct: PropTypes.func,
};

export default AddProduct;
