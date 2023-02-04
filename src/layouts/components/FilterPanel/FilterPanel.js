import styles from './FilterPanel.module.scss';

import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FilterPanel() {
    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2.25, 3.375),
        borderRadius: '8px',
        backgroundColor: 'var(--white)',
        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
    }));
    return (
        <Grid item xs={3}>
            <Item>
                <div className={cx('section')}>
                    <h3>Categories</h3>
                    <ul>
                        <li>
                            <NavLink className={cx('cate-btn')}>
                                Bàn phím
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={cx('cate-btn')}>
                                Bàn phím
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={cx('cate-btn')}>
                                Bàn phím
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <hr className={cx('hr')}></hr>
                <div className={cx('section')}>
                    <h3>Price Range</h3>
                    <div className={cx('price-body')}>
                        <TextField
                            placeholder="0"
                            type="number"
                            sx={{
                                '& .MuiInputBase-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .MuiInputBase-input': {
                                    padding: '8.5px 14px',
                                },
                            }}
                        />
                        <span className={cx('separate')}>-</span>
                        <TextField
                            placeholder="250"
                            type="number"
                            sx={{
                                '& .MuiInputBase-root': {
                                    fontSize: '1.4rem',
                                },
                                '& .MuiInputBase-input': {
                                    padding: '8.5px 14px',
                                },
                            }}
                        />
                    </div>
                    <Button
                        sx={{
                            minWidth: '100%',
                            backgroundColor: 'var(--primary-color)',
                            height: '37px',
                            color: 'var(--white)',
                            fontSize: '1.4rem',
                            textTransform: 'capitalize',
                            marginTop: '8px',

                            '&:hover': {
                                opacity: '0.8',
                                backgroundColor: 'var(--primary-color)',
                            },
                        }}
                    >
                        Apply
                    </Button>
                </div>
                <hr className={cx('hr')}></hr>
                <div className={cx('section')}>
                    <h3>Brands</h3>
                    <ul>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Oppo"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Asus"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Vivo"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Apple"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Xiaomi"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Samsung"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                    },
                                }}
                            />
                        </li>
                    </ul>
                </div>
                <hr className={cx('hr')}></hr>
                <div className={cx('section')}>
                    <h3>Color</h3>
                    <ul>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="White"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                        marginTop: '1px',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Blue"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                        marginTop: '1px',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Green"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                        marginTop: '1px',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Black"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                        marginTop: '1px',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Pink"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                        marginTop: '1px',
                                    },
                                }}
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label="Yellow"
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.4rem',
                                        marginTop: '1px',
                                    },
                                }}
                            />
                        </li>
                    </ul>
                </div>
                <hr className={cx('hr')}></hr>
                <div className={cx('section')}>
                    <h3>Ratings</h3>
                    <ul>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Rating
                                        readOnly
                                        value={5}
                                        size="large"
                                        sx={{
                                            marginTop: '3px',
                                        }}
                                    />
                                }
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Rating
                                        readOnly
                                        value={4}
                                        size="large"
                                        sx={{
                                            marginTop: '3px',
                                        }}
                                    />
                                }
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Rating
                                        readOnly
                                        value={3}
                                        size="large"
                                        sx={{
                                            marginTop: '3px',
                                        }}
                                    />
                                }
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Rating
                                        readOnly
                                        value={2}
                                        size="large"
                                        sx={{
                                            marginTop: '3px',
                                        }}
                                    />
                                }
                            />
                        </li>
                        <li>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            color: '#0F3460',
                                            '&.Mui-checked': {
                                                color: '#0F3460',
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Rating
                                        readOnly
                                        value={1}
                                        size="large"
                                        sx={{
                                            marginTop: '3px',
                                        }}
                                    />
                                }
                            />
                        </li>
                    </ul>
                </div>
            </Item>
        </Grid>
    );
}

export default FilterPanel;
