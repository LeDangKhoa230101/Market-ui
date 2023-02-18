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

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const datas = [
    {
        title: 'Worldwide Delivery',
        desc: 'We offer competitive prices on our 100 million plus product any range.',
        icon: (
            <LocalShippingOutlinedIcon
                sx={{
                    width: '28px',
                    height: '28px',
                }}
            />
        ),
    },
    {
        title: 'Safe Payment',
        desc: 'We offer competitive prices on our 100 million plus product any range.',
        icon: (
            <LocalPoliceOutlinedIcon
                sx={{
                    width: '28px',
                    height: '28px',
                }}
            />
        ),
    },
    {
        title: 'Shop With Confidence',
        desc: 'We offer competitive prices on our 100 million plus product any range.',
        icon: (
            <PentagonOutlinedIcon
                sx={{
                    width: '28px',
                    height: '28px',
                }}
            />
        ),
    },
    {
        title: '24/7 Support',
        desc: 'We offer competitive prices on our 100 million plus product any range.',
        icon: (
            <SupportAgentOutlinedIcon
                sx={{
                    width: '28px',
                    height: '28px',
                }}
            />
        ),
    },
];

function Support() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1223px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1223px)',
    });

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    });

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
                {datas.map((item, index) => {
                    return (
                        <Grid
                            key={index}
                            item
                            xs={
                                isDesktop
                                    ? 3
                                    : isTablet
                                    ? 6
                                    : isMobile
                                    ? 12
                                    : null
                            }
                        >
                            <Item>
                                <Button
                                    sx={{
                                        height: '64px',
                                        backgroundColor: '#F3F5F9',
                                        borderRadius: '999px',
                                        color: 'rgba(0, 0, 0, 0.54)',
                                    }}
                                >
                                    {item.icon}
                                </Button>
                                <span className={cx('title')}>
                                    {item.title}
                                </span>
                                <span className={cx('desc')}>{item.desc}</span>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Support;
