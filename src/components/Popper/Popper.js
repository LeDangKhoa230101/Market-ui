import styles from './Popper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Popper({ children, className }) {
    return <div className={cx('popper-wrapper', className)}>{children}</div>;
}

export default Popper;
