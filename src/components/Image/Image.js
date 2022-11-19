function Image({ src, alt = 'error', classNames = 'rounded' }) {
    return <img src={src} alt={alt} className={classNames} />;
}

export default Image;
