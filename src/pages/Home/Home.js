import styles from './Home.scss';
import Slide from '~/components/Slide/Slide';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <Slide />
            <div className={cx('home_container')}></div>
        </div>
    );
}

export default Home;
