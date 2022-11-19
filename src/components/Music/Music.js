import classNames from 'classnames/bind';
import styles from './Music.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import icons from '../../utils/Icons';

const cx = classNames.bind(styles);

function Music({ name, adult, time, img, active }) {
    return (
        <div className={cx('music', { active })}>
            <div className={cx('img')}>
                <Image src={img} />
                <div className={cx('play')}>{<icons.BsPlayFill />}</div>
            </div>
            <div className={cx('desc')}>
                <span className={cx('name')}>{name}</span>
                <Link to={'/'} className={cx('adult')}>
                    {adult}
                </Link>
                <span className={cx('time')}>{time}</span>
            </div>
        </div>
    );
}

export default Music;
