import styles from './TopCate.module.scss';
import TitleSection from '~/components/TitleSection';

import classNames from 'classnames/bind';
import Grid from '@mui/material/Grid';
import Image from '~/components/Image/Image';
import { styled } from '@mui/material/styles';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Box from '@mui/material/Box';

import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function TopCate() {
    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });

    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(2),
        position: 'relative',
        backgroundColor: 'var(--white)',
        borderRadius: '8px',
        cursor: 'not-allowed',
    }));

    return (
        <div className={cx('top-cate')}>
            <TitleSection
                to={'top-category'}
                icon={
                    <WidgetsIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginTop: '2px',
                            color: 'var(--primary-color)',
                        }}
                    />
                }
                title={'Top Categories'}
            />
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Item>
                            <Image
                                className={cx('top-cate-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75"
                            />
                            <div className={cx('top-cate-body')}>
                                <span
                                    className={cx(
                                        'top-cate-body-left',
                                        isTabletAndMobile &&
                                            'top-cate-body-left-respon',
                                    )}
                                >
                                    Headphone
                                </span>
                                <span
                                    className={cx(
                                        'top-cate-body-right',
                                        isTabletAndMobile &&
                                            'top-cate-body-left-respon',
                                    )}
                                >
                                    3k orders this week
                                </span>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Item>
                            <Image
                                className={cx('top-cate-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75"
                            />
                            <div className={cx('top-cate-body')}>
                                <span
                                    className={cx(
                                        'top-cate-body-left',
                                        isTabletAndMobile &&
                                            'top-cate-body-left-respon',
                                    )}
                                >
                                    Watch
                                </span>
                                <span
                                    className={cx(
                                        'top-cate-body-right',
                                        isTabletAndMobile &&
                                            'top-cate-body-left-respon',
                                    )}
                                >
                                    3k orders this week
                                </span>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Item>
                            <Image
                                className={cx('top-cate-img')}
                                src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1920&q=75"
                            />
                            <div className={cx('top-cate-body')}>
                                <span
                                    className={cx(
                                        'top-cate-body-left',
                                        isTabletAndMobile &&
                                            'top-cate-body-left-respon',
                                    )}
                                >
                                    Sunglass
                                </span>
                                <span
                                    className={cx(
                                        'top-cate-body-right',
                                        isTabletAndMobile &&
                                            'top-cate-body-left-respon',
                                    )}
                                >
                                    3k orders this week
                                </span>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default TopCate;
