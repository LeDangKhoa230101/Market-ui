import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SignupForm.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');
    const [typeRetypePassword, setTypeRetypePassword] = useState('password');
    const [showRetypePassword, setShowRetypePassword] = useState(false);

    //handle error full name
    const [requiredFullName, setRequiredFullName] = useState('none');
    const [fullNameValue, setFullNameValue] = useState('');
    const [borderFullName, setBorderFullName] = useState('');

    //handle error email
    const [requiredEmail, setRequiredEmail] = useState('none');
    const [invalidEmail, setInvalidEmail] = useState('none');
    const [emailValue, setEmailValue] = useState('');
    const [borderEmail, setBorderEmail] = useState('');

    //handle error Password
    const [requiredPassword, setRequiredPassword] = useState('none');
    const [characterPass, setCharacterPass] = useState('none');
    const [passwordValue, setPasswordValue] = useState('');
    const [borderErrorPass, setBorderErrorPass] = useState('');

    //handle error Retype Password
    const [showErrorRetypePassword, setShowErrorRetypePassword] =
        useState('none');
    const [passwordsMustMatch, setPasswordsMustMatch] = useState('none');
    const [retypePasswordValue, setRetypePasswordValue] = useState('');
    const [borderErrorRetypePass, setBorderErrorRetypePass] = useState('');

    // handle show pass
    const handleShowPassword = () => {
        setShowPassword(true);
        setTypePassword('text');
    };
    // handle hide pass
    const handleHidePassword = () => {
        setShowPassword(false);
        setTypePassword('password');
    };

    // handle show Retype Password
    const handleShowRetypePassword = () => {
        setShowRetypePassword(true);
        setTypeRetypePassword('text');
    };
    // handle show Retype Password
    const handleHideRetypePassword = () => {
        setShowRetypePassword(false);
        setTypeRetypePassword('password');
    };

    // hanel validate submit form
    const handleValidated = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setRequiredFullName('block');
            setRequiredEmail('block');
            setRequiredPassword('block');
            setShowErrorRetypePassword('block');
            setBorderFullName('1px solid var(--primary-color)');
            setBorderEmail('1px solid var(--primary-color)');
            setBorderErrorPass('1px solid var(--primary-color)');
            setBorderErrorRetypePass('1px solid var(--primary-color)');
        }
    };

    //handle error full name
    const onBlurFullName = (e) => {
        setRequiredFullName('block');
        setBorderFullName('1px solid var(--primary-color)');
        if (e.target.value) {
            setRequiredFullName('none');
            setBorderFullName('1px solid #00e676');
        }
    };

    const onChangeFullName = (e) => {
        setFullNameValue(e.target.value);
        if (e.target.value) {
            setRequiredFullName('none');
            setBorderFullName('1px solid #00e676');
        } else if (e.target.value === '') {
            setRequiredFullName('block');
            setBorderFullName('1px solid var(--primary-color)');
        }
    };

    const onFocusFullName = (e) => {
        if (e.target.value) {
            setRequiredFullName('none');
            setBorderFullName('1px solid #00e676');
        } else if (e.target.value === '') {
            setBorderFullName('2px solid var(--primary-color)');
        }
    };

    //handle error email
    const handleBlurRequiredEmail = (e) => {
        setRequiredEmail('block');
        setBorderEmail('1px solid var(--primary-color)');
        if (e.target.value !== '') {
            setInvalidEmail('block');
            setRequiredEmail('none');
        }
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(e.target.value)) {
            setInvalidEmail('none');
            setRequiredEmail('none');
            setBorderEmail('1px solid #00e676');
        } else {
            setBorderEmail('1px solid var(--primary-color)');
        }
    };

    const onChangeEmail = (e) => {
        setEmailValue(e.target.value);
        if (e.target.value !== '') {
            setInvalidEmail('block');
            setRequiredEmail('none');
        }
        if (e.target.value === '') {
            setInvalidEmail('none');
            setRequiredEmail('block');
        }
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(e.target.value)) {
            setInvalidEmail('none');
            setRequiredEmail('none');
            setBorderEmail('1px solid #00e676');
        } else {
            setBorderEmail('1px solid var(--primary-color)');
        }
    };

    const onFocusEmail = (e) => {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(e.target.value)) {
            setInvalidEmail('none');
            setRequiredEmail('none');
            setBorderEmail('1px solid #00e676');
        } else {
            setBorderEmail('2px solid var(--primary-color)');
        }
    };

    //handle error Password
    const handleBlurRequiredPassword = (e) => {
        setRequiredPassword('block');
        setBorderErrorPass('1px solid var(--primary-color)');
        if (e.target.value) {
            setRequiredPassword('none');
        }
        if (e.target.value.length >= 6) {
            setBorderErrorPass('1px solid #00e676');
        }
    };

    const onChangePassword = (e) => {
        setPasswordValue(e.target.value);
        setCharacterPass('block');
        setRequiredPassword('none');
        if (e.target.value === '') {
            setRequiredPassword('block');
            setCharacterPass('none');
            setBorderErrorPass('1px solid var(--primary-color)');
        }
        if (e.target.value.length >= 6) {
            setRequiredPassword('none');
            setCharacterPass('none');
            setBorderErrorPass('1px solid #00e676');
        }
        if (e.target.value.length >= 1 && retypePasswordValue === '') {
            setPasswordsMustMatch('none');
        }

        if (e.target.value.length < 6 && e.target.value.length >= 1) {
            setCharacterPass('block');
            setRequiredPassword('none');
            setBorderErrorPass('1px solid var(--primary-color)');
        }
        if (
            e.target.value !== retypePasswordValue &&
            retypePasswordValue !== ''
        ) {
            setBorderErrorRetypePass('1px solid var(--primary-color)');
            setPasswordsMustMatch('block');
        }

        if (
            e.target.value === retypePasswordValue &&
            e.target.value.length >= 6
        ) {
            setBorderErrorRetypePass('1px solid #00e676');
            setPasswordsMustMatch('none');
            setShowErrorRetypePassword('none');
        }
    };

    const onFocusPassword = (e) => {
        if (e.target.value.length >= 6) {
            setBorderErrorPass('1px solid #00e676');
        } else {
            setBorderErrorPass('2px solid var(--primary-color)');
        }
    };

    //handle error Retype Password
    const handleBlurRetypePassword = (e) => {
        setShowErrorRetypePassword('block');
        setBorderErrorRetypePass('1px solid var(--primary-color)');
        if (e.target.value === '') {
            setShowErrorRetypePassword('block');
            setPasswordsMustMatch('none');
        }
        if (e.target.value) {
            setShowErrorRetypePassword('none');
        }
        if (e.target.value === passwordValue && e.target.value.length >= 6) {
            setBorderErrorRetypePass('1px solid #00e676');
            setShowErrorRetypePassword('none');
            setPasswordsMustMatch('none');
        }
    };

    const onChangeRetypePassword = (e) => {
        setRetypePasswordValue(e.target.value);
        setPasswordsMustMatch('block');
        setShowErrorRetypePassword('none');
        if (e.target.value === '') {
            setShowErrorRetypePassword('block');
            setPasswordsMustMatch('none');
        }
        if (e.target.value === passwordValue && e.target.value.length >= 6) {
            setBorderErrorRetypePass('1px solid #00e676');
            setShowErrorRetypePassword('none');
            setPasswordsMustMatch('none');
        }
        if (e.target.value !== passwordValue && e.target.value.length >= 1) {
            setBorderErrorRetypePass('1px solid var(--primary-color)');
            setPasswordsMustMatch('block');
            setShowErrorRetypePassword('none');
        }
        if (e.target.value === '' && passwordValue !== '') {
            setBorderErrorRetypePass('1px solid var(--primary-color)');
        }
    };

    const onFocusRetypePass = (e) => {
        if (e.target.value.length >= 6 && e.target.value === passwordValue) {
            setBorderErrorRetypePass('1px solid #00e676');
        } else {
            setBorderErrorRetypePass('2px solid var(--primary-color)');
        }
    };

    return (
        <Form noValidate onSubmit={handleValidated}>
            {/* Full name */}
            <Form.Group className={cx('modal_user-body')}>
                <Form.Label className={cx('modal_user-label')}>
                    Full name
                </Form.Label>
                <Form.Control
                    required
                    value={fullNameValue}
                    onChange={onChangeFullName}
                    onBlur={onBlurFullName}
                    onFocus={onFocusFullName}
                    className={cx('modal_user-input')}
                    type="text"
                    placeholder="Ralph Adwards"
                    style={{
                        border: borderFullName,
                    }}
                />
                <span
                    className={cx('mes-error')}
                    style={{
                        display: requiredFullName,
                        marginTop: '3px',
                        marginLeft: '2px',
                    }}
                >
                    Full name is required
                </span>
            </Form.Group>
            {/* Email */}
            <Form.Group className={cx('modal_user-body')}>
                <Form.Label className={cx('modal_user-label')}>
                    Email
                </Form.Label>
                <Form.Control
                    required
                    value={emailValue}
                    onBlur={handleBlurRequiredEmail}
                    onChange={onChangeEmail}
                    onFocus={onFocusEmail}
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
                className={cx('modal_user-body', 'modal_user-body--position')}
            >
                <Form.Label className={cx('modal_user-label')}>
                    Password
                </Form.Label>
                <Form.Control
                    required
                    value={passwordValue}
                    onChange={onChangePassword}
                    onFocus={onFocusPassword}
                    onBlur={handleBlurRequiredPassword}
                    className={cx('modal_user-input')}
                    type={typePassword}
                    placeholder="*********"
                    style={{
                        border: borderErrorPass,
                    }}
                />
                <span
                    className={cx('mes-error')}
                    style={{
                        display: requiredPassword,
                        marginTop: '3px',
                        marginLeft: '2px',
                    }}
                >
                    Password is required
                </span>
                <span
                    className={cx('mes-error')}
                    style={{
                        display: characterPass,
                        marginTop: '3px',
                        marginLeft: '2px',
                    }}
                >
                    Password with at least 6 characters
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
            {/* Retype Password */}
            <Form.Group
                className={cx('modal_user-body', 'modal_user-body--position')}
            >
                <Form.Label className={cx('modal_user-label')}>
                    Retype Password
                </Form.Label>
                <Form.Control
                    required
                    type={typeRetypePassword}
                    value={retypePasswordValue}
                    onFocus={onFocusRetypePass}
                    onBlur={handleBlurRetypePassword}
                    onChange={onChangeRetypePassword}
                    className={cx('modal_user-input')}
                    placeholder="*********"
                    style={{
                        border: borderErrorRetypePass,
                    }}
                />
                <span
                    className={cx('mes-error')}
                    style={{
                        display: showErrorRetypePassword,
                        marginTop: '3px',
                        marginLeft: '2px',
                    }}
                >
                    Please re-type password
                </span>
                <span
                    className={cx('mes-error')}
                    style={{
                        display: passwordsMustMatch,
                        marginTop: '3px',
                        marginLeft: '2px',
                    }}
                >
                    Passwords must match
                </span>
                {showRetypePassword ? (
                    <Button
                        onClick={handleHideRetypePassword}
                        className={cx('password-eye')}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </Button>
                ) : (
                    <Button
                        onClick={handleShowRetypePassword}
                        className={cx('password-eye')}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </Button>
                )}
            </Form.Group>
            <Button className={cx('login-btn')} type="submit">
                Signup
            </Button>
        </Form>
    );
}

export default SignupForm;
