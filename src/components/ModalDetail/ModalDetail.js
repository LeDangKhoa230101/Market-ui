import styles from './ModalDetail.module.scss';
import Image from '~/components/Image/Image';

import classNames from 'classnames/bind';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { useSnackbar } from 'notistack';

import { useDispatch } from 'react-redux';
import { addToCart } from '~/reducers/cartSlice';

const cx = classNames.bind(styles);

function ModalDetail({
    open,
    func,
    name,
    cate,
    curPrice,
    description,
    images,
    rating,
    product,
}) {
    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleShowModalAction = (product) => {
        dispatch(addToCart(product));
        enqueueSnackbar(
            <div className={cx('snackbar')}>
                <CheckCircleSharpIcon
                    sx={{
                        marginRight: '8px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'var(--white)',
                        color: '#33d067',
                        borderRadius: '999px',
                    }}
                />
                <span>Added to cart</span>
            </div>,
        );
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
                                {images.map((slide, index) => (
                                    <Image
                                        key={index}
                                        className={cx('modal-img')}
                                        src={slide.imageDetail}
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
                            <h1 className={cx('modal-heading')}>{name}</h1>
                            <span className={cx('modal-cate')}>
                                CATEGORY: {cate}
                            </span>
                            <span className={cx('modal-price')}>
                                {curPrice} US$
                            </span>
                            <Stack>
                                <Rating value={rating} size="large" />
                            </Stack>
                            <span className={cx('modal-description')}>
                                {description}
                            </span>
                            <span className={cx('modal-seperate')}></span>
                            <Button
                                onClick={() => handleShowModalAction(product)}
                                sx={{
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
