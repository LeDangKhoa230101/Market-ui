import styles from './ModalDetail.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const cx = classNames.bind(styles);

const IMAGE_DETAIL = [
    {
        image: 'https://bazaar.ui-lib.com/assets/images/products/flash-1.png',
    },
    {
        image: 'https://bazaar.ui-lib.com/assets/images/products/flash-1.png',
    },
];

function ModalDetail({ open, func }) {
    const [showAddToCart, setShowAddToCart] = useState('');
    const [showModalAction, setShowModalAction] = useState('none');

    const [qtItem, setQtItem] = useState(0);

    const handleShowModalAction = () => {
        setShowAddToCart('none');
        setShowModalAction('');
        setQtItem(qtItem + 1);
    };

    const handleAddModalAction = () => {
        setQtItem(qtItem + 1);
    };

    const handleRemoveModalAction = () => {
        if (qtItem === 1) {
            setShowModalAction('none');
            setShowAddToCart('');
        }
        setQtItem(qtItem - 1);
    };

    return (
        <Modal
            open={open}
            onClose={func}
            sx={{
                transition:
                    'box-shadow 3000ms cubic-bezier(0.4, 0, 0.2, 1) 500ms',
            }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '900px',
                        height: '440px',
                        padding: '20px 24px',
                        border: 'none',
                        outline: 'none',
                        borderRadius: '8px',
                        backgroundColor: 'var(--white)',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Carousel
                                fullHeightHover={false}
                                navButtonsAlwaysVisible
                                PrevIcon={<ArrowBackIcon />}
                                NextIcon={<ArrowForwardIcon />}
                                navButtonsProps={{
                                    style: {
                                        backgroundColor: 'var(--primary-color)',
                                        color: 'var(--white)',
                                        width: '26px',
                                        height: '26px',
                                    },
                                }}
                                navButtonsWrapperProps={{
                                    style: {
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    },
                                }}
                                duration={500}
                                indicators={false}
                                autoPlay={false}
                                animation="slide"
                            >
                                {IMAGE_DETAIL.map((slide, index) => (
                                    <Image
                                        key={index}
                                        className={cx('modal-img')}
                                        src={slide.image}
                                    />
                                ))}
                            </Carousel>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <h1 className={cx('modal-heading')}>
                                NikeCourt Zoom Vapor Cage
                            </h1>
                            <span className={cx('modal-cate')}>
                                CATEGORY: Cosmetic
                            </span>
                            <span className={cx('modal-price')}>
                                250,00 US$
                            </span>
                            <Stack>
                                <Rating value={4} size="large" />
                            </Stack>
                            <span className={cx('modal-description')}>
                                Components may have multiple widths defined,
                                causing the layout to change at the defined
                                breakpoint. Width values given to larger
                                breakpoints override those given to smaller
                                breakpoints.
                            </span>
                            <span className={cx('modal-seperate')}></span>
                            <Button
                                onClick={handleShowModalAction}
                                sx={{
                                    display: showAddToCart,
                                    width: '164px',
                                    height: '45px',
                                    fontSize: '1.5rem',
                                    textTransform: 'capitalize',
                                    color: 'var(--white)',
                                    marginTop: '16px',
                                    backgroundColor: 'var(--primary-color)',
                                    '&:hover': {
                                        backgroundColor: 'var(--primary-color)',
                                        opacity: '0.9',
                                    },
                                }}
                            >
                                <span
                                    style={{
                                        display: 'block',
                                        marginTop: '3px',
                                    }}
                                >
                                    Add To Cart
                                </span>
                            </Button>
                            <div
                                style={{ display: showModalAction }}
                                className={cx('modal-action')}
                            >
                                <RemoveIcon
                                    onClick={handleRemoveModalAction}
                                    sx={{
                                        width: '41px',
                                        height: '45px',
                                        padding: '9.6px',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(210, 63, 87, 0.5)',
                                        color: 'var(--primary-color)',
                                        cursor: 'pointer',

                                        '&:hover': {
                                            backgroundColor:
                                                'rgba(210, 63, 87, 0.04)',
                                        },
                                    }}
                                />
                                <span
                                    style={{
                                        margin: '0 20px',
                                        fontSize: '2rem',
                                        fontWeight: '600',
                                    }}
                                >
                                    0{qtItem}
                                </span>
                                <AddIcon
                                    onClick={handleAddModalAction}
                                    sx={{
                                        width: '41px',
                                        height: '45px',
                                        padding: '9.6px',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(210, 63, 87, 0.5)',
                                        color: 'var(--primary-color)',
                                        cursor: 'pointer',

                                        '&:hover': {
                                            backgroundColor:
                                                'rgba(210, 63, 87, 0.04)',
                                        },
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <CloseIcon
                        onClick={func}
                        sx={{
                            position: 'absolute',
                            top: '3px',
                            right: '3px',
                            width: '36px',
                            height: '36px',
                            padding: '8px',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            color: 'rgba(0, 0, 0, 0.54)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                    />
                </Box>
            </Fade>
        </Modal>
    );
}

export default ModalDetail;
