import classNames from 'classnames/bind';
import Image from '../../../components/Image/Image';
import styles from './Player.module.scss';
import images from '../../../assest/images/images';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { CgArrowsExchange } from 'react-icons/cg';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { BsArrowRepeat, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';

import { useState, useEffect } from 'react';
import vipAudio from '../../../assest/audios/audio';

const cx = classNames.bind(styles);

function Player() {
    const [audio] = useState(new Audio(vipAudio.tongphu));
    const [playing, setPlaying] = useState(false);
    const [range, setRange] = useState(0);

    const toggle = () => {
        setPlaying(!playing);
    };

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('img')}>
                    <Image src={images.avatar} classNames="rounded" />
                </div>
                <div className={cx('title')}>
                    <span className={cx('heading')}>Kiếp này gả cho anh anhanhanh</span>
                    <span className={cx('subtitle')}>Thái Học</span>
                </div>
                <div className={cx('favourite')}>
                    <AiOutlineHeart />
                </div>
                <div className={cx('more')}>
                    <FiMoreHorizontal />
                </div>
            </div>
            <div className={cx('center')}>
                <div className={cx('control')}>
                    <div className={cx('icon')}>
                        <CgArrowsExchange />
                    </div>
                    <div className={cx('icon')}>
                        <BiSkipPrevious />
                    </div>
                    <div className={cx('play')} onClick={toggle}>
                        {playing ? <BsPauseCircle /> : <BsPlayCircle />}
                    </div>
                    <div className={cx('icon')}>
                        <BiSkipNext />
                    </div>
                    <div className={cx('icon')}>
                        <BsArrowRepeat />
                    </div>
                </div>
                <div className={cx('audio')}>
                    <span className={cx('left_time')}>00.01</span>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={range}
                        onChange={(e) => {
                            setRange(e.target.value);
                        }}
                        className={cx('range')}
                    />

                    <span className={cx('right_time')}>{'ok'}</span>
                </div>
            </div>
            <div className={cx('right')}> </div>
        </div>
    );
}

export default Player;
