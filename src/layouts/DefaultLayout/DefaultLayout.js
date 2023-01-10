import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
