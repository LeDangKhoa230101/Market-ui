import { forwardRef } from 'react';

const Image = forwardRef(({ alt, ...props }, ref) => {
    return <img ref={ref} alt={alt} {...props} />;
});

export default Image;
