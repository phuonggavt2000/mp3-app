import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt = 'error', classNames = { rounded: true }, enlarge }) {
    return <img src={src} alt={alt} className={cx('img', { ...classNames, enlarge })} />;
}

export default Image;
