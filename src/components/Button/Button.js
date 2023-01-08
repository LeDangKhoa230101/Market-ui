import styles from './Button.scss';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Button(
    {
        to,
        href,
        primary = false,
        rounded = false,
        outline = false,
        medium = false,
        large = false,
        children,
        className,
        leftIcon,
        rightIcon,
        onClick,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrappers', {
        [className]: className,
        primary,
        rounded,
        outline,
        medium,
        large,
    });

    return (
        <Comp ref={ref} className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default forwardRef(Button);
