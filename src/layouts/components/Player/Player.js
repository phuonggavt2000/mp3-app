import classNames from 'classnames/bind';
import Image from '../../../components/Image/Image';
import styles from './Player.module.scss';
import images from '../../../assest/images/images';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

const cx = classNames.bind(styles);

function Player() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('img')}>
                    <Image src={images.avatar} classNames="rounded" />
                </div>
                <div className={cx('title')}>
                    <span className={cx('heading')}>Kiếp này gả cho anh</span>
                    <span className={cx('subtitle')}>Thái Học</span>
                </div>
                <div className={cx('favourite')}>
                    <AiOutlineHeart />
                </div>
                <div className={cx('more')}>
                    <FiMoreHorizontal />
                </div>
            </div>
            <div className={cx('center')}>ge</div>
            <div className={cx('right')}>ge</div>
        </div>
    );
}

export default Player;
