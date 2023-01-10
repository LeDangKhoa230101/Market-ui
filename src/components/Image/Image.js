import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Image = forwardRef(({ alt, ...props }, ref) => {
    return <img ref={ref} alt={alt} {...props} />;
});

Image.propTypes = {
    alt: PropTypes.node,
};

export default Image;
