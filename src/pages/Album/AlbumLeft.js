import classNames from 'classnames/bind';
import images from '../../assest/images/images';
import Image from '../../components/Image/Image';
import styles from './Album.module.scss';
import Button from 'react-bootstrap/Button';
import icons from '../../utils/Icons';

const cx = classNames.bind(styles);

function AlbumLeft() {
    return (
        <div className={cx('album_left')}>
            <div className={cx('img')}>
                <Image src={images.namcu} />
            </div>
            <div className="d-flex flex-column text-center fw-semibold">
                <span className="fw-bold fs-4 mt-2">2000s K-pop</span>
                <span className="fs-7 mt-1 text-secondary">Cap nhap: 20/12/2021</span>
                <span className="fs-7 text-secondary">Cap nhap: 20/12/2021 daf asdfsdaf </span>
                <span className="fs-7 text-secondary">Cap nhap: 20/12/2021</span>
            </div>
            <Button
                variant="primary"
                className="mx-4 mt-3 d-flex justify-content-center align-items-center rounded-pill text-capitalize"
            >
                {<icons.BsPlayFill className="fs-4" />} Phát Ngẫu nhiên
            </Button>
            <div className="mt-3">
                <Button variant="alpha" className="rounded-circle me-1">
                    <icons.AiOutlineHeart />
                </Button>
                <Button variant="alpha" className="rounded-circle ms-1">
                    <icons.FiMoreHorizontal />
                </Button>
            </div>
        </div>
    );
}

export default AlbumLeft;
