import classNames from 'classnames/bind';
import styles from './Music.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import icons from '../../utils/Icons';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import { ThemeContext } from '../../layouts/DefaultLayout/DefaultLayout';
import WaveMusic from '../WaveMusic.js/WaveMusic';

const cx = classNames.bind(styles);

function Music({ name, adult, time, img, active, onClick, index }) {
    const data = useContext(ThemeContext);

    return (
        <div className={cx('music', { active: active === index })}>
            <div
                className={cx('img', {
                    disable: data.loading,
                })}
                onClick={onClick}
            >
                <Image src={img} />
                <div className={cx('play')}>{<icons.BsPlayFill />}</div>
                <div className={cx('control')}>
                    {data.playing && !data.loading && <WaveMusic />}
                    {!data.playing && !data.loading && <icons.BsPlayFill />}
                    {data.loading && <Spinner animation="border" />}
                </div>
            </div>
            <div className={cx('desc')}>
                <span className=" text-capitalize">{name}</span>
                <Link to={'/'} className={cx('adult')}>
                    {adult}
                </Link>
                <span className={cx('time')}>{time}</span>
            </div>
        </div>
    );
}

export default Music;
