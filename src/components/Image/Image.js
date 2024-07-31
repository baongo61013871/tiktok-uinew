import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState(customFallBack);

    const handleError = () => {
        setFallBack();
    };
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={src || fallBack}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
    ref: PropTypes.string,
};
export default Image;
