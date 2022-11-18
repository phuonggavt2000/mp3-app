import classNames from 'classnames/bind';
import styles from './NewMusic.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function NewMusic() {
    const [active, setActive] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Mới Phát Hành</span>
            <div className={cx('control')}>
                <div
                    className={cx('musicType', {
                        active: active,
                    })}
                >
                    <span className={cx('musicType_title')}>TẤT CẢ</span>
                </div>
                <div className={cx('musicType')}>
                    <span className={cx('musicType_title')}>VIỆT NAM</span>
                </div>
                <div className={cx('musicType')}>
                    <span className={cx('musicType_title')}>QUỐC TẾ</span>
                </div>

                <div className={cx('all')}>
                    <span className={cx('all_title')}>TẤT CẢ</span>
                </div>
            </div>
        </div>
    );
}

export default NewMusic;
