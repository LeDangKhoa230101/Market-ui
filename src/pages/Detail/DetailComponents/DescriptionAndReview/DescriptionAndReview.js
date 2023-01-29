import styles from './DescriptionAndReview.module.scss';

import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);
function DescriptionAndReview() {
    const Tab = styled(TabUnstyled)`
        color: #373f50;
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: 500;
        padding: 8px;
        min-width: 70px;
        background-color: transparent;

        &.${tabUnstyledClasses.selected} {
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
        }
    `;

    const TabsList = styled(TabsListUnstyled)(
        () => `
            margin-bottom: 16px;
            border-bottom: 1px solid #dae1e7;
        `,
    );
    return (
        <Box
            sx={{
                width: 'var(--width-website)',
                marginTop: '80px',
            }}
        >
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <Tab>Description</Tab>
                    <Tab>Reviews</Tab>
                </TabsList>
                <TabPanelUnstyled value={0}>
                    <h3 className={cx('desc-heading')}>Specification:</h3>
                    <ul className={cx('desc-list')}>
                        <li>Model: M12 Pro, Màn hình hiển thị: HD 7.0 inch</li>
                        <li>2SIM hỗ trợ tất cả các mạng 2G/3G/4G/5G</li>
                        <li>ROM:512G</li>
                        <li>RAM: 16G</li>
                        <li>Mạng: Hỗ trợ 3G-5G</li>
                        <li>Máy ảnh: 32.0MP+50.0MP</li>
                        <li>Pin: 6800mAh</li>
                        <li>Bộ nhớ ngoài: Thẻ SIM kép, TF</li>
                    </ul>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={1}>
                    <ul className={cx('review-list')}>
                        <li className={cx('review-item')}>
                            <div className={cx('review-user')}>
                                <Avatar
                                    sx={{
                                        width: '48px',
                                        height: '48px',
                                        marginRight: '16px',
                                    }}
                                    alt="Avatar"
                                    src="https://i.pinimg.com/736x/ea/29/d3/ea29d38a4b63dd36ac2b810e9b2bd41a.jpg"
                                />
                                <div className={cx('review-body')}>
                                    <span className={cx('review-name')}>
                                        Jannie Schumm
                                    </span>
                                    <div className={cx('rating')}>
                                        <Rating
                                            readOnly
                                            value={4}
                                            size="large"
                                        />
                                        <span className={cx('day-review')}>
                                            2022/8/12 3:12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('review-text')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Varius massa id ut mattis.
                                Facilisis vitae gravida egestas ac account.
                            </div>
                        </li>
                        <li className={cx('review-item')}>
                            <div className={cx('review-user')}>
                                <Avatar
                                    sx={{
                                        width: '48px',
                                        height: '48px',
                                        marginRight: '16px',
                                    }}
                                    alt="Avatar"
                                    src="https://i.pinimg.com/736x/ea/29/d3/ea29d38a4b63dd36ac2b810e9b2bd41a.jpg"
                                />
                                <div className={cx('review-body')}>
                                    <span className={cx('review-name')}>
                                        Jannie Schumm
                                    </span>
                                    <div className={cx('rating')}>
                                        <Rating
                                            readOnly
                                            value={4}
                                            size="large"
                                        />
                                        <span className={cx('day-review')}>
                                            2022/8/12 3:12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('review-text')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Varius massa id ut mattis.
                                Facilisis vitae gravida egestas ac account.
                            </div>
                        </li>
                        <li className={cx('review-item')}>
                            <div className={cx('review-user')}>
                                <Avatar
                                    sx={{
                                        width: '48px',
                                        height: '48px',
                                        marginRight: '16px',
                                    }}
                                    alt="Avatar"
                                    src="https://i.pinimg.com/736x/ea/29/d3/ea29d38a4b63dd36ac2b810e9b2bd41a.jpg"
                                />
                                <div className={cx('review-body')}>
                                    <span className={cx('review-name')}>
                                        Jannie Schumm
                                    </span>
                                    <div className={cx('rating')}>
                                        <Rating
                                            readOnly
                                            value={4}
                                            size="large"
                                        />
                                        <span className={cx('day-review')}>
                                            2022/8/12 3:12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('review-text')}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Varius massa id ut mattis.
                                Facilisis vitae gravida egestas ac account.
                            </div>
                        </li>
                    </ul>
                    {/* <h3 className={cx('no-reviews')}>No Reviews Yet</h3> */}

                    <form className={cx('form-review')}>
                        <h3 className={cx('form-heading')}>
                            Write a Review for this product
                        </h3>
                        <div className={cx('form-rating')}>
                            <span>Your Rating:</span>
                            <Rating
                                value={0}
                                size="large"
                                sx={{
                                    marginTop: '2px',
                                    fontSize: '2.4rem',
                                }}
                            />
                        </div>
                        <div className={cx('form-input')}>
                            <span>Your Review:</span>
                            <TextareaAutosize
                                placeholder="Write a review here..."
                                minRows={6}
                                className={cx('textarea')}
                                style={{
                                    width: 'calc(100% - 48px)',
                                    padding: '12px',
                                    fontSize: '1.4rem',
                                    color: 'rgb(43, 52, 69)',
                                    border: '1px solid #bdbfc2',
                                    borderRadius: '4px',
                                }}
                            />
                        </div>
                        <Button
                            sx={{
                                minWidth: '96px',
                                height: '36px',
                                marginTop: '20px',
                                fontSize: '1.4rem',
                                textTransform: 'capitalize',
                                backgroundColor: 'var(--primary-color)',
                                color: 'var(--white)',

                                '&:hover': {
                                    backgroundColor: 'var(--primary-color)',
                                    opacity: '0.9',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </TabPanelUnstyled>
            </TabsUnstyled>
        </Box>
    );
}

export default DescriptionAndReview;
