import styles from './Support.module.scss';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import PentagonOutlinedIcon from '@mui/icons-material/PentagonOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const cx = classNames.bind(styles);

function Support() {
    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
        transition: 'all ease 0.3s',
        cursor: 'default',

        '&:hover': {
            boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)',
        },
    }));
    return (
        <div className={cx('support')}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Item>
                        <Button
                            sx={{
                                height: '64px',
                                backgroundColor: '#F3F5F9',
                                borderRadius: '999px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            }}
                        >
                            <LocalShippingOutlinedIcon
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                }}
                            />
                        </Button>
                        <span className={cx('title')}>Worldwide Delivery</span>
                        <span className={cx('desc')}>
                            We offer competitive prices on our 100 million plus
                            product any range.
                        </span>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Button
                            sx={{
                                height: '64px',
                                backgroundColor: '#F3F5F9',
                                borderRadius: '999px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            }}
                        >
                            <LocalPoliceOutlinedIcon
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                }}
                            />
                        </Button>
                        <span className={cx('title')}>Safe Payment</span>
                        <span className={cx('desc')}>
                            We offer competitive prices on our 100 million plus
                            product any range.
                        </span>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Button
                            sx={{
                                height: '64px',
                                backgroundColor: '#F3F5F9',
                                borderRadius: '999px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            }}
                        >
                            <PentagonOutlinedIcon
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                }}
                            />
                        </Button>
                        <span className={cx('title')}>
                            Shop With Confidence
                        </span>
                        <span className={cx('desc')}>
                            We offer competitive prices on our 100 million plus
                            product any range.
                        </span>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Button
                            sx={{
                                height: '64px',
                                backgroundColor: '#F3F5F9',
                                borderRadius: '999px',
                                color: 'rgba(0, 0, 0, 0.54)',
                            }}
                        >
                            <SupportAgentOutlinedIcon
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                }}
                            />
                        </Button>
                        <span className={cx('title')}>24/7 Support</span>
                        <span className={cx('desc')}>
                            We offer competitive prices on our 100 million plus
                            product any range.
                        </span>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Support;
