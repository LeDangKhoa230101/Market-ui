import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LoginForm.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');

    const [validated, setValidated] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(true);
        setTypePassword('text');
    };

    const handleHidePassword = () => {
        setShowPassword(false);
        setTypePassword('password');
    };

    const handleValidated = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleValidated}>
            <Form.Group
                controlId="validationCustomEmail"
                className={cx('modal_user-body')}
            >
                <Form.Label className={cx('modal_user-label')}>
                    Email
                </Form.Label>
                <Form.Control
                    required
                    aria-describedby="inputGroupPrepend"
                    className={cx('modal_user-input')}
                    type="email"
                    placeholder="exmple@mail.com"
                />
                <Form.Control.Feedback
                    type="invalid"
                    className={cx('mes-error')}
                >
                    Email is required
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
                className={cx('modal_user-body', 'modal_user-body--position')}
            >
                <Form.Label className={cx('modal_user-label')}>
                    Password
                </Form.Label>
                <Form.Control
                    required
                    className={cx('modal_user-input')}
                    type={typePassword}
                    placeholder="*********"
                />
                <Form.Control.Feedback
                    type="invalid"
                    className={cx('mes-error')}
                >
                    Password is required
                </Form.Control.Feedback>
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
    );
}

export default LoginForm;
