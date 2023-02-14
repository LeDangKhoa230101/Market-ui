import Header from '~/layouts/components/Header';
import Navigation from '~/layouts/components/Navigation';

import { useMediaQuery } from 'react-responsive';

function HeaderOnly({ children }) {
    const isTabletAndMobile = useMediaQuery({
        query: '(max-width: 1223px)',
    });
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            {isTabletAndMobile && <Navigation />}
        </div>
    );
}

export default HeaderOnly;
