import styles from './Signin.module.scss';

import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');

    // handle error email
    const [requiredEmail, setRequiredEmail] = useState('none');
    const [invalidEmail, setInvalidEmail] = useState('none');
    const [borderEmail, setBorderEmail] = useState('');
    const [emailValue, setEmailValue] = useState('');

    // handle error password
    const [requiredPass, setRequiredPass] = useState('none');
    const [borderPass, setBorderPass] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleShowPassword = () => {
        setShowPassword(true);
        setTypePassword('text');
    };

    const handleHidePassword = () => {
        setShowPassword(false);
        setTypePassword('password');
    };

    //handle validated form
    const handleValidated = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();

            setBorderEmail('1px solid var(--primary-color)');
            setBorderPass('1px solid var(--primary-color)');

            setRequiredEmail('block');
            setRequiredPass('block');
        }
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(emailValue)) {
            setBorderEmail('1px solid #00e676');
            setRequiredEmail('none');
            setInvalidEmail('none');
        }
        if (
            emailValue !== '' &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(emailValue)
        ) {
            setBorderEmail('1px solid var(--primary-color)');
            setRequiredEmail('none');
            setInvalidEmail('block');
        }
        if (passwordValue !== '') {
            setBorderPass('1px solid #00e676');
            setRequiredPass('none');
        }
    };

    // handle error email
    const onBlurEmail = (e) => {
        setRequiredEmail('block');
        setBorderEmail('1px solid var(--primary-color)');
        if (e.target.value) {
            setInvalidEmail('block');
            setRequiredEmail('none');
        }
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(e.target.value)) {
            setRequiredEmail('none');
            setInvalidEmail('none');
            setBorderEmail('1px solid #00e676');
        }
    };

    const onChangeEmail = (e) => {
        setEmailValue(e.target.value);
        if (e.target.value) {
            setInvalidEmail('block');
            setRequiredEmail('none');
        } else if (e.target.value === '') {
            setRequiredEmail('block');
            setInvalidEmail('none');
        }

        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(e.target.value)) {
            setRequiredEmail('none');
            setInvalidEmail('none');
            setBorderEmail('1px solid #00e676');
        } else {
            setBorderEmail('1px solid var(--primary-color)');
        }
    };

    const onFocusEmail = (e) => {
        if (
            e.target.value === '' ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(e.target.value)
        ) {
            setBorderEmail('2px solid var(--primary-color)');
        }
    };

    // handle error pass
    const onBlurPass = (e) => {
        setRequiredPass('block');
        setBorderPass('1px solid var(--primary-color)');
        if (e.target.value) {
            setRequiredPass('none');
            setBorderPass('1px solid #00e676');
        }
    };

    const onChangePass = (e) => {
        setPasswordValue(e.target.value);
        if (e.target.value) {
            setRequiredPass('none');
            setBorderPass('1px solid #00e676');
        } else if (e.target.value === '') {
            setRequiredPass('block');
            setBorderPass('1px solid var(--primary-color)');
        }
    };

    const onFocusPass = (e) => {
        if (e.target.value) {
            setBorderPass('1px solid #00e676');
        } else if (e.target.value === '') {
            setBorderPass('2px solid var(--primary-color)');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Form noValidate onSubmit={handleValidated} className={cx('form')}>
                <Image
                    alt="logo"
                    src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg"
                />
                <p>Welcome To Bazaar</p>
                {/* Email */}
                <Form.Group
                    controlId="validationCustomEmail"
                    className={cx('modal_user-body')}
                >
                    <Form.Label className={cx('modal_user-label')}>
                        Email
                    </Form.Label>
                    <Form.Control
                        required
                        value={emailValue}
                        onBlur={onBlurEmail}
                        onChange={onChangeEmail}
                        onFocus={onFocusEmail}
                        aria-describedby="inputGroupPrepend"
                        className={cx('modal_user-input')}
                        type="email"
                        placeholder="exmple@gmail.com"
                        style={{
                            border: borderEmail,
                        }}
                    />
                    <span
                        className={cx('mes-error')}
                        style={{
                            display: requiredEmail,
                            marginTop: '3px',
                            marginLeft: '2px',
                        }}
                    >
                        Email is required
                    </span>
                    <span
                        className={cx('mes-error')}
                        style={{
                            display: invalidEmail,
                            marginTop: '3px',
                            marginLeft: '2px',
                        }}
                    >
                        Invalid email
                    </span>
                </Form.Group>
                {/* Password */}
                <Form.Group
                    className={cx(
                        'modal_user-body',
                        'modal_user-body--position',
                    )}
                >
                    <Form.Label className={cx('modal_user-label')}>
                        Password
                    </Form.Label>
                    <Form.Control
                        required
                        value={passwordValue}
                        onChange={onChangePass}
                        onBlur={onBlurPass}
                        onFocus={onFocusPass}
                        className={cx('modal_user-input')}
                        type={typePassword}
                        placeholder="*********"
                        style={{
                            border: borderPass,
                        }}
                    />
                    <span
                        className={cx('mes-error')}
                        style={{
                            display: requiredPass,
                            marginTop: '3px',
                            marginLeft: '2px',
                        }}
                    >
                        Password is required
                    </span>
                    {showPassword ? (
                        <Button
                            onClick={handleHidePassword}
                            className={cx('password-eye')}
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </Button>
                    ) : (
                        <Button
                            onClick={handleShowPassword}
                            className={cx('password-eye')}
                        >
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </Button>
                    )}
                </Form.Group>
                <Button className={cx('login-btn')} type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Signin;
