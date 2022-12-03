import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt = 'error', classNames = { rounded: true }, enlarge, sponsor }) {
    return <img src={src} alt={alt} className={cx('img', { ...classNames, enlarge, sponsor })} />;
}

export default Image;
