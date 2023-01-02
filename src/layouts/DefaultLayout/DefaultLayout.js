import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;